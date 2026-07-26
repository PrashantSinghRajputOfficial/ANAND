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
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/products');
const projectsRoute = require('./routes/projects');
const servicesRoute = require('./routes/services');
const blogsRoute = require('./routes/blogs');
const inquiriesRoute = require('./routes/inquiries');
const applicationsRoute = require('./routes/applications');
const jobsRoute = require('./routes/jobs');
const visitorsRoute = require('./routes/visitors');

app.use('/api/auth', authRoute);
app.use('/auth', authRoute);

app.use('/api/products', productsRoute);
app.use('/products', productsRoute);

app.use('/api/projects', projectsRoute);
app.use('/projects', projectsRoute);

app.use('/api/services', servicesRoute);
app.use('/services', servicesRoute);

app.use('/api/blogs', blogsRoute);
app.use('/blogs', blogsRoute);

app.use('/api/inquiries', inquiriesRoute);
app.use('/inquiries', inquiriesRoute);

app.use('/api/applications', applicationsRoute);
app.use('/applications', applicationsRoute);

app.use('/api/jobs', jobsRoute);
app.use('/jobs', jobsRoute);

app.use('/api/visitors', visitorsRoute);
app.use('/visitors', visitorsRoute);

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
