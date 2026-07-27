const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const Product = require('../models/Product');
const Project = require('../models/Project');
const Service = require('../models/Service');
const Blog = require('../models/Blog');
const Job = require('../models/Job');
const Inquiry = require('../models/Inquiry');
const Application = require('../models/Application');
const Visitor = require('../models/Visitor');

const autoSeed = async () => {
  try {
    console.log('Running collection-level auto-seed check...');

    // 1. Seed User
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const defaultUser = new User({
        username: 'admin',
        password: 'electrical@2026',
        name: 'Super Admin',
        role: 'Admin'
      });
      await defaultUser.save();
      console.log('Auto-seeded default admin user.');
    }

    // Load JSON files
    const blogsPath = path.join(__dirname, '../../src/data/blogs.json');
    const productsPath = path.join(__dirname, '../../src/data/products.json');
    const projectsPath = path.join(__dirname, '../../src/data/projects.json');
    const servicesPath = path.join(__dirname, '../../src/data/services.json');
    const inquiriesPath = path.join(__dirname, '../data/inquiries.json');
    const visitorsPath = path.join(__dirname, '../data/visitors.json');

    // 2. Seed Products
    const productCount = await Product.countDocuments();
    if (productCount === 0 && fs.existsSync(productsPath)) {
      const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
      if (products.length) {
        await Product.insertMany(products);
        console.log(`Auto-seeded ${products.length} Products`);
      }
    }

    // 3. Seed Projects
    const projectCount = await Project.countDocuments();
    if (projectCount === 0 && fs.existsSync(projectsPath)) {
      const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));
      if (projects.length) {
        await Project.insertMany(projects);
        console.log(`Auto-seeded ${projects.length} Projects`);
      }
    }

    // 4. Seed Services
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0 && fs.existsSync(servicesPath)) {
      const services = JSON.parse(fs.readFileSync(servicesPath, 'utf-8'));
      if (services.length) {
        await Service.insertMany(services);
        console.log(`Auto-seeded ${services.length} Services`);
      }
    }

    // 5. Seed Blogs
    const blogCount = await Blog.countDocuments();
    if (blogCount === 0 && fs.existsSync(blogsPath)) {
      const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'));
      if (blogs.length) {
        await Blog.insertMany(blogs);
        console.log(`Auto-seeded ${blogs.length} Blogs`);
      }
    }

    // 6. Seed Jobs
    const jobCount = await Job.countDocuments();
    if (jobCount === 0) {
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
      console.log('Auto-seeded 2 Jobs');
    }

    // 7. Seed Inquiries from local backup
    const inquiryCount = await Inquiry.countDocuments();
    if (inquiryCount === 0 && fs.existsSync(inquiriesPath)) {
      const inquiries = JSON.parse(fs.readFileSync(inquiriesPath, 'utf-8'));
      if (inquiries.length) {
        await Inquiry.insertMany(inquiries);
        console.log(`Auto-seeded ${inquiries.length} Inquiries from local backup`);
      }
    }

    // 8. Seed Applications
    const appCount = await Application.countDocuments();
    if (appCount === 0) {
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
        }
      ];
      await Application.insertMany(initialApplications);
      console.log('Auto-seeded 1 Application');
    }

    // 9. Seed Visitors from local backup
    const visitorCount = await Visitor.countDocuments();
    if (visitorCount === 0 && fs.existsSync(visitorsPath)) {
      const visitors = JSON.parse(fs.readFileSync(visitorsPath, 'utf-8'));
      if (visitors.length) {
        await Visitor.insertMany(visitors);
        console.log(`Auto-seeded ${visitors.length} Visitors from local backup`);
      }
    }

    console.log('Auto-seeding check completed successfully!');
  } catch (err) {
    console.error('Auto-seeding failed:', err.message);
  }
};

module.exports = autoSeed;
