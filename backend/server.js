require('dotenv').config();
const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, 'debug.log');

// Clear debug log on start
fs.writeFileSync(logFile, `=== Startup at ${new Date().toISOString()} ===\n`, 'utf-8');

// Redirect console.log and console.error
const logStream = fs.createWriteStream(logFile, { flags: 'a' });
console.log = function(...args) {
  logStream.write(`[LOG] ${args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')}\n`);
};
console.error = function(...args) {
  logStream.write(`[ERR] ${args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')}\n`);
};
console.warn = function(...args) {
  logStream.write(`[WARN] ${args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')}\n`);
};

process.on('uncaughtException', (err) => {
  fs.appendFileSync(logFile, `[UNCAUGHT EXCEPTION] ${err.stack || err}\n`, 'utf-8');
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  fs.appendFileSync(logFile, `[UNHANDLED REJECTION] ${reason.stack || reason}\n`, 'utf-8');
});

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Serve static uploaded files (like PDFs)
const uploadDir = process.env.VERCEL
  ? '/tmp'
  : path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadDir));

// Routes
const apiRouter = express.Router();
apiRouter.use('/auth', require('./routes/auth'));
apiRouter.use('/products', require('./routes/products'));
apiRouter.use('/projects', require('./routes/projects'));
apiRouter.use('/services', require('./routes/services'));
apiRouter.use('/blogs', require('./routes/blogs'));
apiRouter.use('/inquiries', require('./routes/inquiries'));
apiRouter.use('/applications', require('./routes/applications'));
apiRouter.use('/jobs', require('./routes/jobs'));
apiRouter.use('/visitors', require('./routes/visitors'));

// Mount under both '/api' and '/' to support local development and cPanel Phusion Passenger sub-path routing
app.use('/api', apiRouter);
app.use('/', apiRouter);

// Default Route
app.get('/', (req, res) => {
  res.send('Anand Electricals API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
