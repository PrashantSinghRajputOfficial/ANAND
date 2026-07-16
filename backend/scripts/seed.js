require('dotenv').config({ path: __dirname + '/../.env' });
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const connectDB = require('../config/db');

// Models
const User = require('../models/User');
const Product = require('../models/Product');
const Project = require('../models/Project');
const Service = require('../models/Service');
const Blog = require('../models/Blog');
const Inquiry = require('../models/Inquiry');
const Application = require('../models/Application');
const Job = require('../models/Job');
const Visitor = require('../models/Visitor');

const seedData = async () => {
  try {
    await connectDB();

    // 1. Clear Existing Data
    await User.deleteMany();
    await Product.deleteMany();
    await Project.deleteMany();
    await Service.deleteMany();
    await Blog.deleteMany();
    await Inquiry.deleteMany();
    await Application.deleteMany();
    await Job.deleteMany();

    console.log('Database cleared.');

    // 2. Load JSON files
    const blogsPath = path.join(__dirname, '../../src/data/blogs.json');
    const productsPath = path.join(__dirname, '../../src/data/products.json');
    const projectsPath = path.join(__dirname, '../../src/data/projects.json');
    const servicesPath = path.join(__dirname, '../../src/data/services.json');

    const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'));
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));
    const services = JSON.parse(fs.readFileSync(servicesPath, 'utf-8'));

    // 3. Seed Users
    const defaultUser = new User({
      username: 'admin',
      password: 'electrical@2026', // Will be hashed by userSchema.pre('save')
      name: 'Super Admin',
      role: 'Admin'
    });
    await defaultUser.save();
    console.log('Seeded default admin user (admin / electrical@2026)');

    // 4. Seed Products
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} Products`);

    // 5. Seed Projects
    await Project.insertMany(projects);
    console.log(`Seeded ${projects.length} Projects`);

    // 6. Seed Services
    await Service.insertMany(services);
    console.log(`Seeded ${services.length} Services`);

    // 7. Seed Blogs
    await Blog.insertMany(blogs);
    console.log(`Seeded ${blogs.length} Blogs`);

    // 8. Seed Initial Jobs (from db.js)
    const initialJobs = [
      {
        id: 'senior-commissioning',
        title: 'Senior Electrical Commissioning Engineer',
        location: 'Jaipur (On-site travel)',
        type: 'Full-Time',
        reqs: 'B.Tech/Diploma in Electrical Engineering with 4+ years validating HT substations or MCC panel commissioning.'
      },
      {
        id: 'estimation-proposals',
        title: 'Estimation & Proposals Engineer',
        location: 'Jaipur HQ',
        type: 'Full-Time',
        reqs: '2+ years reading electrical drawings and preparing BOM bills of materials for industrial tender bids.'
      }
    ];
    await Job.insertMany(initialJobs);
    console.log(`Seeded ${initialJobs.length} Jobs`);

    // 9. Seed Initial Inquiries (none by default, starts empty)

    // 10. Seed Initial Applications
    const initialApplications = [
      {
        id: 'app-1',
        name: 'Rahul Verma',
        email: 'rahul.verma@outlook.com',
        phone: '+91 88776 65544',
        jobTitle: 'Senior Electrical Commissioning Engineer',
        status: 'Shortlisted',
        date: new Date('2026-06-25T16:45:00.000Z'),
        cvName: 'rahul_verma_resume.pdf'
      },
      {
        id: 'app-2',
        name: 'Neha Sharma',
        email: 'neha.sharma@gmail.com',
        phone: '+91 77665 54433',
        jobTitle: 'Estimation & Proposals Engineer',
        status: 'Pending',
        date: new Date('2026-06-26T10:20:00.000Z'),
        cvName: 'neha_sharma_cv.pdf'
      }
    ];
    await Application.insertMany(initialApplications);
    console.log(`Seeded ${initialApplications.length} Applications`);

    // 11. Seed Initial Visitors
    const initialVisitors = [
      { ip: '192.168.1.45', page: '/', device: 'Mobile', date: new Date(Date.now() - 3600000 * 2) },
      { ip: '103.45.12.98', page: '/products', device: 'Desktop', date: new Date(Date.now() - 3600000 * 4) },
      { ip: '45.112.56.23', page: '/services', device: 'Desktop', date: new Date(Date.now() - 3600000 * 6) },
      { ip: '157.24.89.112', page: '/projects', device: 'Mobile', date: new Date(Date.now() - 3600000 * 8) },
      { ip: '103.45.12.98', page: '/contact', device: 'Desktop', date: new Date(Date.now() - 3600000 * 10) }
    ];
    await Visitor.insertMany(initialVisitors);
    console.log(`Seeded ${initialVisitors.length} Visitors`);

    console.log('Database Seeding Completed Successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Error Seeding Data: ${error.message}`);
    process.exit(1);
  }
};

seedData();
