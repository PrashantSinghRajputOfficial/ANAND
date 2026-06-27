import initialBlogs from '../data/blogs.json';
import initialProducts from '../data/products.json';
import initialProjects from '../data/projects.json';
import initialServices from '../data/services.json';

// Helper to load data
const getLocalStorage = (key, fallback) => {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return fallback;
  }
};

const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Initialize DB if not set
const initializeDB = () => {
  if (!localStorage.getItem('anand_db_initialized')) {
    // Initial users
    const initialUsers = [
      { id: '1', username: 'admin', password: 'password123', name: 'Super Admin', role: 'Admin' }
    ];
    
    // Initial inquiries (mock)
    const initialInquiries = [
      {
        id: 'inq-1',
        name: 'Rajesh Kumar',
        company: 'Tata Projects Ltd',
        email: 'rajesh@tataprojects.com',
        phone: '+91 98765 43210',
        service: 'PLC Control Panels',
        message: 'Need estimation for a water treatment plant in Udaipur. Power specification: 415V AC, 3-phase, 50Hz. Load capacity: 150 kW.',
        status: 'Pending',
        date: '2026-06-25T14:30:00.000Z'
      },
      {
        id: 'inq-2',
        name: 'Suresh Patel',
        company: 'Adani Solar',
        email: 'suresh.p@adani.com',
        phone: '+91 91234 56789',
        service: 'APFC Panels',
        message: 'Looking for a quotation of 350 KVAR APFC Panel with detuned reactors. Power factor needs to be maintained above 0.98. RIICO industrial area, Jaipur.',
        status: 'Contacted',
        date: '2026-06-26T09:15:00.000Z'
      },
      {
        id: 'inq-3',
        name: 'Vikram Singh',
        company: 'Jaipur Rugs Co',
        email: 'vikram.singh@jaipurrugs.com',
        phone: '+91 99887 76655',
        service: 'Motor Control Centers (MCC)',
        message: 'We are expanding our spinning unit and need 2 motor control centers. 12 motor outputs (5.5 kW - 22 kW) with smart soft starters.',
        status: 'Resolved',
        date: '2026-06-24T11:00:00.000Z'
      }
    ];

    // Initial applications
    const initialApplications = [
      {
        id: 'app-1',
        name: 'Rahul Verma',
        email: 'rahul.verma@outlook.com',
        phone: '+91 88776 65544',
        jobTitle: 'Senior Electrical Commissioning Engineer',
        status: 'Shortlisted',
        date: '2026-06-25T16:45:00.000Z',
        cvName: 'rahul_verma_resume.pdf'
      },
      {
        id: 'app-2',
        name: 'Neha Sharma',
        email: 'neha.sharma@gmail.com',
        phone: '+91 77665 54433',
        jobTitle: 'Estimation & Proposals Engineer',
        status: 'Pending',
        date: '2026-06-26T10:20:00.000Z',
        cvName: 'neha_sharma_cv.pdf'
      }
    ];

    // Initial jobs
    const initialJobs = [
      {
        id: 'senior-commissioning',
        title: "Senior Electrical Commissioning Engineer",
        location: "Jaipur (On-site travel)",
        type: "Full-Time",
        reqs: "B.Tech/Diploma in Electrical Engineering with 4+ years validating HT substations or MCC panel commissioning."
      },
      {
        id: 'estimation-proposals',
        title: "Estimation & Proposals Engineer",
        location: "Jaipur HQ",
        type: "Full-Time",
        reqs: "2+ years reading electrical drawings and preparing BOM bills of materials for industrial tender bids."
      }
    ];

    setLocalStorage('anand_blogs', initialBlogs);
    setLocalStorage('anand_products', initialProducts);
    setLocalStorage('anand_projects', initialProjects);
    setLocalStorage('anand_services', initialServices);
    setLocalStorage('anand_users', initialUsers);
    setLocalStorage('anand_inquiries', initialInquiries);
    setLocalStorage('anand_applications', initialApplications);
    setLocalStorage('anand_jobs', initialJobs);
    localStorage.setItem('anand_db_initialized', 'true');
  }
};

// Auto-run initialization
initializeDB();

export const db = {
  // Blogs
  getBlogs: () => getLocalStorage('anand_blogs', initialBlogs),
  saveBlog: (blog) => {
    const blogs = db.getBlogs();
    if (blog.id) {
      const idx = blogs.findIndex(b => b.id === blog.id);
      if (idx !== -1) blogs[idx] = { ...blogs[idx], ...blog };
      else blogs.push(blog);
    } else {
      const newBlog = {
        ...blog,
        id: blog.slug || `blog-${Date.now()}`,
        slug: blog.slug || blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        date: blog.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      blogs.push(newBlog);
    }
    setLocalStorage('anand_blogs', blogs);
    return blogs;
  },
  deleteBlog: (id) => {
    const blogs = db.getBlogs().filter(b => b.id !== id);
    setLocalStorage('anand_blogs', blogs);
    return blogs;
  },

  // Products
  getProducts: () => getLocalStorage('anand_products', initialProducts),
  saveProduct: (product) => {
    const products = db.getProducts();
    if (product.id) {
      const idx = products.findIndex(p => p.id === product.id);
      if (idx !== -1) products[idx] = { ...products[idx], ...product };
      else products.push(product);
    } else {
      const newProduct = {
        ...product,
        id: product.slug || `prod-${Date.now()}`,
        slug: product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      };
      products.push(newProduct);
    }
    setLocalStorage('anand_products', products);
    return products;
  },
  deleteProduct: (id) => {
    const products = db.getProducts().filter(p => p.id !== id);
    setLocalStorage('anand_products', products);
    return products;
  },

  // Projects
  getProjects: () => getLocalStorage('anand_projects', initialProjects),
  saveProject: (project) => {
    const projects = db.getProjects();
    if (project.id) {
      const idx = projects.findIndex(p => p.id === project.id);
      if (idx !== -1) projects[idx] = { ...projects[idx], ...project };
      else projects.push(project);
    } else {
      const newProject = {
        ...project,
        id: project.slug || `proj-${Date.now()}`,
        slug: project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      };
      projects.push(newProject);
    }
    setLocalStorage('anand_projects', projects);
    return projects;
  },
  deleteProject: (id) => {
    const projects = db.getProjects().filter(p => p.id !== id);
    setLocalStorage('anand_projects', projects);
    return projects;
  },

  // Services
  getServices: () => getLocalStorage('anand_services', initialServices),
  saveService: (service) => {
    const services = db.getServices();
    if (service.id) {
      const idx = services.findIndex(s => s.id === service.id);
      if (idx !== -1) services[idx] = { ...services[idx], ...service };
      else services.push(service);
    } else {
      const newService = {
        ...service,
        id: service.slug || `serv-${Date.now()}`,
        slug: service.slug || service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      };
      services.push(newService);
    }
    setLocalStorage('anand_services', services);
    return services;
  },
  deleteService: (id) => {
    const services = db.getServices().filter(s => s.id !== id);
    setLocalStorage('anand_services', services);
    return services;
  },

  // Inquiries
  getInquiries: () => getLocalStorage('anand_inquiries', []),
  addInquiry: (inquiry) => {
    const inquiries = db.getInquiries();
    const newInquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      status: 'Pending',
      date: new Date().toISOString()
    };
    inquiries.unshift(newInquiry);
    setLocalStorage('anand_inquiries', inquiries);
    return newInquiry;
  },
  updateInquiryStatus: (id, status) => {
    const inquiries = db.getInquiries();
    const idx = inquiries.findIndex(i => i.id === id);
    if (idx !== -1) {
      inquiries[idx].status = status;
      setLocalStorage('anand_inquiries', inquiries);
    }
    return inquiries;
  },
  deleteInquiry: (id) => {
    const inquiries = db.getInquiries().filter(i => i.id !== id);
    setLocalStorage('anand_inquiries', inquiries);
    return inquiries;
  },

  // Applications
  getApplications: () => getLocalStorage('anand_applications', []),
  addApplication: (app) => {
    const apps = db.getApplications();
    const newApp = {
      ...app,
      id: `app-${Date.now()}`,
      status: 'Pending',
      date: new Date().toISOString()
    };
    apps.unshift(newApp);
    setLocalStorage('anand_applications', apps);
    return newApp;
  },
  updateApplicationStatus: (id, status) => {
    const apps = db.getApplications();
    const idx = apps.findIndex(a => a.id === id);
    if (idx !== -1) {
      apps[idx].status = status;
      setLocalStorage('anand_applications', apps);
    }
    return apps;
  },
  deleteApplication: (id) => {
    const apps = db.getApplications().filter(a => a.id !== id);
    setLocalStorage('anand_applications', apps);
    return apps;
  },

  // Jobs
  getJobs: () => getLocalStorage('anand_jobs', []),
  saveJob: (job) => {
    const jobs = db.getJobs();
    if (job.id) {
      const idx = jobs.findIndex(j => j.id === job.id);
      if (idx !== -1) jobs[idx] = { ...jobs[idx], ...job };
      else jobs.push(job);
    } else {
      const newJob = {
        ...job,
        id: `job-${Date.now()}`
      };
      jobs.push(newJob);
    }
    setLocalStorage('anand_jobs', jobs);
    return jobs;
  },
  deleteJob: (id) => {
    const jobs = db.getJobs().filter(j => j.id !== id);
    setLocalStorage('anand_jobs', jobs);
    return jobs;
  },

  // Users & Auth
  getUsers: () => getLocalStorage('anand_users', []),
  login: (username, password) => {
    const users = db.getUsers();
    const found = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
    if (found) {
      const { password, ...userWithoutPassword } = found;
      // Save session in localStorage
      localStorage.setItem('anand_admin_user', JSON.stringify(userWithoutPassword));
      return userWithoutPassword;
    }
    return null;
  },
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem('anand_admin_user');
      return user ? JSON.parse(user) : null;
    } catch (e) {
      return null;
    }
  },
  logout: () => {
    localStorage.removeItem('anand_admin_user');
  }
};
