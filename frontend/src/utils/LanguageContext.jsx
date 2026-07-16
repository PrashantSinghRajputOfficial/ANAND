import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Navbar & Header
    home: "Home",
    about: "About",
    leadership: "Leadership",
    products: "Products",
    services: "Services",
    projects: "Projects",
    industries: "Industries",
    getQuote: "Get Quote",
    adminLogin: "Admin Login",
    followUs: "Follow Us:",
    getFreeConsultation: "Get Free Consultation",
    allProducts: "All Products",
    allServices: "All Services",
    exploreServices: "Explore Services",
    viewAllProducts: "View All Products",
    contactUs: "Contact Us",
    downloads: "Downloads",
    gallery: "Gallery",

    // Footer
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    adminPortal: "Admin Portal",
    rightsReserved: "Anand Electricals & Engineers Pvt Ltd. All rights reserved.",

    // Floating Widgets
    floatingCall: "Call Us",
    floatingWhatsapp: "WhatsApp Us",
    floatingEmail: "Email Us",

    // Home Page Hero
    heroTagline: "Safe & Reliable Electrical Solutions",
    heroTitle: "High-Quality Switchgear & Custom Control Panels.",
    heroDescription: "Durable, safe, and efficient electrical panels engineered to minimize line losses and prevent power interruptions.",
    requestQuote: "Request a Quote",

    // About Section
    aboutUsTitle: "Trusted Electrical Solutions for Industrial Factories & Buildings",
    aboutUsDescription1: "Anand Electricals & Engineers is a highly reliable electrical contracting firm. We specialize in designing and manufacturing high-durability distribution panels and safety enclosures that protect against short circuits.",
    aboutUsDescription2: "Our products are built with high-quality sheet metal, using automated manufacturing machines for precision and safety. All installations are completely shock-proof and built to last.",
    learnMoreAboutUs: "Learn More About Us",

    // Features
    shockproofTitle: "Shockproof & Safe Design",
    shockproofDesc: "All products undergo strict insulation testing to eliminate short-circuit and leakage hazards.",
    durableTitle: "Durable Metal Enclosures",
    durableDesc: "Heavy-duty CRCA steel cabinets designed to protect switches from dust, rust, and water ingress.",
    govApprovedTitle: "Government Approved (Grade-A)",
    govApprovedDesc: "Licensed A-Grade electrical contractor trusted by regional utilities and private developers.",

    // Capabilities Section
    capabilitiesTagline: "Our Capabilities",
    capabilitiesTitle: "Industrial Switchgear & Panel Systems",

    // Stats
    yearsOfService: "Years of Service",
    completedProjects: "Completed Projects",
    happyClients: "Happy Clients",
    staffMembers: "Staff Members",

    // CTA Section
    partnerTagline: "Partner with Us",
    partnerTitle: "Ready to Power Your Next Industrial Project?",
    partnerDesc: "Get in touch with our electrical contracting team to receive customized switchgear layouts and itemized estimations.",
    requestGatedQuote: "Request Gated Quote",
    scheduleConsultation: "Schedule a Consultation",

    // Contact Page & Form
    contactTitle: "Get in Touch",
    contactSub: "Write to us and our representative will respond within 24 hours.",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phone: "Phone Number",
    subject: "Subject",
    message: "Message",
    sendButton: "Send Message",
    sendingButton: "Sending...",
  },
  hinglish: {
    // Navbar & Header
    home: "Home",
    about: "About Us",
    leadership: "Leadership",
    products: "Products",
    services: "Services",
    projects: "Projects",
    industries: "Industries",
    getQuote: "Estimate Lein",
    adminLogin: "Admin Login",
    followUs: "Follow Karein:",
    getFreeConsultation: "Free Consultation",
    allProducts: "Sare Products",
    allServices: "Sari Services",
    exploreServices: "Services Dekhein",
    viewAllProducts: "Sare Products Dekhein",
    contactUs: "Contact Karein",
    downloads: "Downloads",
    gallery: "Gallery",

    // Footer
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    adminPortal: "Admin Portal",
    rightsReserved: "Anand Electricals & Engineers Pvt Ltd. Sabhi adhikar surakshit hain.",

    // Floating Widgets
    floatingCall: "Call Karein",
    floatingWhatsapp: "WhatsApp Karein",
    floatingEmail: "Email Karein",

    // Home Page Hero
    heroTagline: "Safe aur Reliable Electrical Solutions",
    heroTitle: "High-Quality Switchgear aur Custom Control Panels.",
    heroDescription: "Mazboot, safe aur efficient electrical panels jo line losses aur power cuts ko rokte hain.",
    requestQuote: "Estimate Pucho",

    // About Section
    aboutUsTitle: "Industrial Factories aur Buildings ke liye Bharosemand Electrical Solutions",
    aboutUsDescription1: "Anand Electricals & Engineers ek bohot hi trusted electrical contracting firm hai. Hum high-durability distribution panels aur safety enclosures banane mein specialize karte hain jo short circuits se bachate hain.",
    aboutUsDescription2: "Hamare products high-quality sheet metal se bane hote hain, aur absolute precision ke liye automated machines ka use kiya jata hai. Sabhi installations shock-proof hote hain aur saalon-saal chalte hain.",
    learnMoreAboutUs: "Hamare Baare Mein Aur Jaanein",

    // Features
    shockproofTitle: "Shockproof aur Safe Design",
    shockproofDesc: "Sabhi products strict insulation testing se guzarte hain taaki short-circuit ka koi darr na rahe.",
    durableTitle: "Mazboot Metal Enclosures",
    durableDesc: "Heavy-duty CRCA steel cabinets jo switches ko mitti, zang aur paani se surakshit rakhte hain.",
    govApprovedTitle: "Government Approved (Grade-A)",
    govApprovedDesc: "Licensed A-Grade electrical contractor jise regional utilities aur private developers trust karte hain.",

    // Capabilities Section
    capabilitiesTagline: "Hamari Capabilities",
    capabilitiesTitle: "Industrial Switchgear aur Panel Systems",

    // Stats
    yearsOfService: "Saal ka Anubhav",
    completedProjects: "Poore Kiye Projects",
    happyClients: "Happy Clients",
    staffMembers: "Staff Members",

    // CTA Section
    partnerTagline: "Hamare Sath Judein",
    partnerTitle: "Kya aap apne agle Industrial Project ke liye taiyar hain?",
    partnerDesc: "Hamari electrical contracting team se contact karein taaki aapko custom panel layouts aur estimates mil sakein.",
    requestGatedQuote: "Quote Request Karein",
    scheduleConsultation: "Salah Ke Liye Time Lein",

    // Contact Page & Form
    contactTitle: "Contact Karein",
    contactSub: "Humein likhein aur hum 24 ghante ke andar reply karenge.",
    fullName: "Pura Naam",
    emailAddress: "Email Address",
    phone: "Phone Number",
    subject: "Subject",
    message: "Message",
    sendButton: "Message Bhejein",
    sendingButton: "Bhej rahe hain...",

    // Page Banners & Titles
    aboutPageTitle: "Anand Electricals & Engineers ke Baare Mein",
    aboutPageSubtitle: "2008 se reliable, safe aur efficient electrical power infrastructure deliver kar rahe hain.",
    projectsPageTitle: "Case Studies aur Deliveries",
    projectsPageSubtitle: "Indian regions mein hamare heavy power installations ke records dekhein.",
    productsPageTitle: "Switchgear aur Custom Control Panels",
    productsPageSubtitle: "Certified power distribution aur automation panels ki hamari range dekhein.",
    servicesPageTitle: "Engineering Services",
    servicesPageSubtitle: "Blueprint se lekar commissioning tak, hum Turnkey Electrical Solutions deliver karte hain.",
    contactPageTitle: "Contact Us",
    contactPageSubtitle: "Projects, panels, contracting aur technical consultations ke liye contact karein.",

    // About Page Content
    corporateProfile: "Corporate Profile",
    excellenceTitle: "Engineering Excellence ke 18 Saal",
    aboutProfile1: "Jaipur, Rajasthan mein sthapit, Anand Electricals & Engineers ek trusted industrial electrical contracting firm ban chuka hai. Hum high-durability distribution panels aur safety enclosures design aur manufacture karte hain jo short circuits se bachate hain.",
    aboutProfile2: "Hum high-tension (HT) substations, low-tension (LT) main distribution panels, aur motor control centers (MCC) design aur construct karte hain. Har panel ko advanced CAD layouts aur automated machinery se safety aur compliance guarantee karne ke liye banaya jata hain.",
    ourOperations: "Hamare Operations",
    op1: "6300A capacity tak CPRI-tested control panel fabrication.",
    op2: "Licensed Grade-A state electrical contractor.",
    op3: "On-site installation aur maintenance engineers ki dedicated team.",
    op4: "Computerized 3D design aur safety calculation models.",
    ourVision: "Hamara Vision",
    visionDesc: "India ka premier B2B industrial electrical engineering partner banna. Hum highly safe, thermally stable, aur energy-efficient control systems ke sath manufacturing expansions ko support karne ka aim rakhte hain.",
    ourMission: "Hamara Mission",
    missionDesc: "Complex electrical configurations ko safe, reliable physical cabinets mein badalna. Hum electrical faults aur energy losses ko rokne ke liye strict quality testing aur premium components commit karte hain.",
    corePrinciples: "Core Principles",
    ourValues: "Hamari Values",
    valueSafety: "Safety First",
    valueSafetyDesc: "Hum apne personnel, equipment aur client facilities ki safety ko sabse upar rakhte hain.",
    valueQuality: "Quality Standards",
    valueQualityDesc: "Hum sabhi panel fabrications mein strict quality control aur premium grade materials use karte hain.",
    valueTrust: "Client Trust",
    valueTrustDesc: "Hum apne commitments ko honor karte hain aur robust engineering solutions time par deliver karke long-term relationships banate hain.",

    // Contact Details
    hq: "Headquarters",
    emailUs: "Email Karein",
    callUs: "Call Karein",

    // Buttons, Labels & Metas
    learnMore: "Aur Janiye",
    getQuoteBtn: "Quote Lein",
    techReview: "Technical Review",
    yearOfCompletion: "Completion ka Saal",
    clientLabel: "Client",
    keySpecification: "Key Specification",
    executionCompliance: "Execution compliance: CPRI / IEEE / Local Inspectorate",

    // Leadership Page Content
    "Executive Profile": "Executive Profile",
    "Meet our leadership and explore the strategic vision driving Anand Electricals.": "Leadership se milein aur Anand Electricals ke strategic vision ko samjhein.",
    "Amit Kumar": "Amit Kumar",
    "Founder & Managing Director": "Founder & Managing Director",
    "18+ years of hands-on experience in high-voltage industrial engineering, switchgear designs, and grid commissioning.": "High-voltage industrial engineering, switchgear designs, aur grid commissioning mein 18+ saal ka practical experience.",
    "Connect Profile:": "Connect Profile:",
    "LinkedIn Profile": "LinkedIn Profile",
    "Director's Message": "Director's Message",
    "Our Mandate: Safe, Continuous Power for Indian Manufacturing": "Hamara Mandate: Indian Manufacturing ke liye Safe aur Continuous Power",
    "An industrial website should convey competence, not flash. At Anand Electricals, we build critical systems that factories rely on for continuous operations. Our goal is to offer B2B developers engineering stability, transparency, and top-tier safety certifications.": "Ek industrial website par dikhava nahi, balki competence dikhni chahiye. Anand Electricals mein, hum aise critical systems banate hain jinpar factories continuous operations ke liye rely karti hain. Hamara goal B2B developers ko engineering stability, transparency, aur top-tier safety certifications dena hai.",
    "Professional Journey": "Professional Journey",
    "Amit Kumar started his career as a systems validation engineer, certifying HT switchgears for regional utilities. Realizing the gap in local manufacturing capacity for custom, highly reliable PLC and distribution panels, he founded Anand Electricals in 2008. Under his leadership, the firm scaled from a local supplier to an enterprise contractor worth multi-crore grid projects, delivering installations in major industrial estates including RIICO Sarna Industrial Area.": "Amit Kumar ne apne career ki shuruaat ek systems validation engineer ke roop mein ki thi, jahan wo regional utilities ke liye HT switchgears ko certify karte the. Custom aur highly reliable PLC aur distribution panels ki local manufacturing capacity mein kami ko dekhte hue, unhone 2008 mein Anand Electricals ki sthapna ki. Unki leadership ke under, company ek local supplier se badhakar ek enterprise contractor ban gayi hai jo aaj multi-crore grid projects handle karti hai, jisme RIICO Sarna Industrial Area jaise bade industrial estates mein setups lagana shamil hai.",
    "Operational Vision": "Operational Vision",
    "Establish Anand as the standard of choice for industrial control grids, maintaining high-conductivity thresholds and 100% FAT test transparency.": "Anand ko industrial control grids ke liye ek gold standard banana, jisme high-conductivity thresholds aur 100% FAT test transparency bani rahe.",
    "Contracting Mission": "Contracting Mission",
    "Provide developers with pre-fabricated, modular Changeover AMF and MCC panels that reduce commissioning lags by up to 25%.": "Developers ko pre-fabricated, modular Changeover AMF aur MCC panels provide karna jo commissioning delays ko 25% tak kam karein.",
    "Achievements & Credentials": "Achievements & Credentials",
    "515+ Projects Completed": "515+ Projects Completed",
    "Successfully deployed industrial panel infrastructure projects across Rajasthan and beyond.": "Rajasthan aur usse aage industrial panel infrastructure projects successfully deploy kiye hain.",
    "Grade-A Contracting License": "Grade-A Contracting License",
    "Authorized by the State Electrical Inspectorate to execute massive utility line jobs.": "Bade utility line jobs execute karne ke liye State Electrical Inspectorate dwara authorized.",
    "Timeline of Growth": "Timeline of Growth",
    "Founded Anand Electricals in Jaipur, Rajasthan, fabricating custom motor starters and panels.": "Jaipur, Rajasthan mein Anand Electricals ki shuruaat ki, jahan custom motor starters aur panels fabricate kiye jate the.",
    "Expanded into HT Substation deployments and received Grade-A contracting credentials.": "HT Substation deployments mein expand kiya aur Grade-A contracting credentials prapt kiye.",
    "Commissioned the advanced Sarna Industrial Area manufacturing unit with modern CNC metalworking setups.": "Modern CNC metalworking setups ke sath advanced Sarna Industrial Area manufacturing unit shuru ki.",
    "Successfully delivered automated PLC synchronization boards for top industrial clients.": "Top industrial clients ke liye automated PLC synchronization boards successfully deliver kiye.",
    "Charged major turnkey infrastructure projects, reaching a milestone of 515+ completed projects.": "Bade turnkey infrastructure projects charge kiye, aur 515+ completed projects ka milestone hasil kiya.",
    "Our Professional Team": "Hamari Professional Team",
    "Management & Team Leaders": "Management aur Team Leaders",
    "Deepesh Singh Rajput": "Deepesh Singh Rajput",
    "Online Team Manager": "Online Team Manager",
    "Coordinates digital workflows, online client queries, site proposals, and online sales operations.": "Digital workflows, online client queries, site proposals, aur online sales operations ko coordinate karte hain.",
    "Connect:": "Connect:",
    "Profile": "Profile",

    // Services Page details
    "Turnkey Plant & Factory Electrification": "Turnkey Plant aur Factory Electrification",
    "End-to-end electrical wiring, switchgear setup, and panel installation for new industrial manufacturing plants.": "Naye industrial manufacturing plants ke liye end-to-end electrical wiring, switchgear setup, aur panel installation.",
    "High-voltage wiring and distribution networks": "High-voltage wiring aur distribution networks",
    "Assistance in government inspections and safety clearances": "Government inspections aur safety clearances mein help",
    "Transformer and heavy generator grid synchronization": "Transformer aur heavy generator grid synchronization",
    "Pre-commissioning quality testing and checks": "Pre-commissioning quality testing aur checks",
    "Custom Control Panel Design": "Custom Control Panel Design",
    "Bespoke fabrication of Motor Control Centers (MCC), PLC cabinets, and distribution switchboards according to custom load specifications.": "Custom load specifications ke according Motor Control Centers (MCC), PLC cabinets, aur distribution switchboards ki custom fabrication.",
    "Pre-production computerized CAD 3D designing": "Pre-production computerized CAD 3D designing",
    "CNC sheet metal cutting and precise cabinet punching": "CNC sheet metal cutting aur precise cabinet punching",
    "Installation of high-grade copper busbars and safety breakers": "High-grade copper busbars aur safety breakers ki installation",
    "Pre-delivery factory inspection and heat-run testing": "Pre-delivery factory inspection aur heat-run testing",
    "Safety & Compliance Audits": "Safety aur Compliance Audits",
    "On-site inspection of earthing resistance, load balancing, panel thermal screening, and local electrical inspectorate certification.": "Earthing resistance, load balancing, panel thermal screening, aur local electrical inspectorate certification ki on-site inspection.",
    "Measurement of soil resistivity and earthing health": "Soil resistivity aur earthing health ki measurement",
    "Thermal imaging of busbars to detect hot spots": "Hot spots detect karne ke liye busbars ki thermal imaging",
    "Detailed reports for compliance and electrical clearance": "Compliance aur electrical clearance ke liye detailed reports",
    "Preventive Maintenance Contracts": "Preventive Maintenance Contracts",
    "Routine contactor servicing, capacitor health tests, busbar tight-checks, and emergency breakdown support.": "Routine contactor servicing, capacitor health tests, busbar tight-checks, aur emergency breakdown support.",
    "Ultrasonic cleaning and contact dressing of breakers": "Breakers ki ultrasonic cleaning aur contact dressing",
    "Dielectric strength testing of transformer oil": "Transformer oil ki dielectric strength testing",
    "Emergency breakdown troubleshooting and parts replacement": "Emergency breakdown troubleshooting aur parts replacement",

    // Products Data
    "DG Set Control Panel": "DG Set Control Panel",
    "User-friendly control system to operate and monitor backup generators.": "Backup generators ko control aur monitor karne ke liye user-friendly panel.",
    "Electric Control Panel": "Electric Control Panel",
    "Safe, reliable power distribution board for factories and buildings.": "Factories aur buildings ke liye safe, reliable power distribution board.",
    "HT LT Panel": "HT LT Panel",
    "High-capacity switchgear panel to safely distribute high-voltage utility power.": "High-voltage utility power ko safely distribute karne ke liye high-capacity panel.",
    "APFC Panel": "APFC Panel",
    "Automatic Power Factor Correction panel to reduce energy bills and penalties.": "Automatic Power Factor Correction (APFC) panel jo energy bills aur penalties ko kam karta hai.",
    "PCC Panel": "PCC Panel",
    "Power Control Center panel for centralized power distribution.": "Centralized power distribution ke liye Power Control Center panel.",
    "Fire Hydrant Panel": "Fire Hydrant Panel",
    "Emergency control panel to run firefighting water pumps automatically.": "Firefighting water pumps ko automatically chalane ke liye emergency control panel.",

    // Projects Data
    "Turnkey 132kV Substation Deployment": "Turnkey 132kV Substation Setup",
    "Design, engineering, and commissioning of a turnkey 132kV industrial substation, including transformers, HT panels, and lightning systems.": "Turnkey 132kV industrial substation ki design, engineering, aur commissioning, jisme transformers, HT panels aur lightning systems shaamil hain.",
    "Automotive Factory Power Synchronization": "Automotive Factory Power Synchronization",
    "Installation of Motor Control Centers (MCC), dual-input switchboards, automatic PLC systems, and copper busbar routing.": "Motor Control Centers (MCC), dual-input switchboards, automatic PLC systems, aur copper busbar routing ki installation.",
    "Hospital Emergency Power Setup": "Hospital Emergency Power Setup",
    "Commissioning of automatic generator changeover panels (AMF), isolated medical panels, and chemical earthing systems.": "Automatic generator changeover panels (AMF), isolated medical panels, aur chemical earthing systems ki commissioning."
  }
};

const autoTranslateWords = {
  "and": "aur",
  "for": "ke liye",
  "with": "ke sath",
  "from": "se",
  "our": "hamare",
  "we": "hum",
  "are": "hain",
  "is": "hai",
  "trusted": "trusted",
  "reliable": "reliable",
  "safety": "safety",
  "excellent": "behtareen",
  "years": "saal",
  "completed": "poore kiye",
  "of": "ke",
  "the": "the",
  "to": "ko",
  "design": "design",
  "installation": "installation",
  "maintenance": "maintenance",
  "engineering": "engineering",
  "commissioning": "commissioning",
  "manufacturing": "manufacturing",
  "factories": "factories",
  "substation": "substation",
  "redundancy": "redundancy",
  "emergency": "emergency",
  "power": "power",
  "electrical": "electrical",
  "control": "control",
  "panels": "panels",
  "custom": "custom",
  "automatic": "automatic",
  "heavy-duty": "heavy-duty",
  "heavy": "heavy",
  "high-quality": "high-quality",
  "high": "high",
  "certified": "certified",
  "protection": "protection",
  "systems": "systems",
  "solutions": "solutions",
  "all": "sabhi",
  "every": "har",
  "any": "koi",
  "factory": "factory",
  "buildings": "buildings",
  "hospitals": "hospitals",
  "schools": "schools",
  "apartments": "apartments",
  "housing": "housing",
  "generator": "generator",
  "generators": "generators",
  "workshops": "workshops",
  "offices": "offices",
  "offsite": "offsite",
  "onsite": "onsite",
  "testing": "testing",
  "monitoring": "monitoring",
  "starts": "shuru hota hai",
  "saving": "bachat",
  "saves": "bachata hai",
  "reducing": "kam karte hue",
  "reduce": "kam karein",
  "energy": "energy",
  "electricity": "electricity",
  "bills": "bills",
  "penalties": "penalties",
  "avoiding": "bachte hue",
  "avoid": "bachein",
  "active": "active",
  "run": "chalayein",
  "running": "chal raha hai",
  "startup": "startup",
  "successfully": "successfully",
  "fails": "fail hota hai",
  "failed": "fail hua",
  "correctly": "sahi tarike se",
  "about": "baare mein",
  "us": "hum",
  "contact": "contact",
  "home": "home",
  "products": "products",
  "services": "services",
  "projects": "projects",
  "industries": "industries",
  "quote": "quote",
  "get": "lein",
  "free": "free",
  "consultation": "consultation",
  "follow": "follow",
  "karein": "karein",
  "view": "dekhein",
  "view all": "sare dekhein",
  "sare": "sare",
  "explore": "dekhein",
  "privacy": "privacy",
  "policy": "policy",
  "terms": "terms",
  "portal": "portal",
  "admin": "admin",
  "rights": "adhikar",
  "reserved": "surakshit",
  "call": "call",
  "whatsapp": "whatsapp",
  "email": "email",
  "safely": "safely",
  "distribute": "distribute",
  "distribution": "distribution",
  "high-voltage": "high-voltage",
  "low-voltage": "low-voltage",
  "utility": "utility",
  "voltage": "voltage",
  "current": "current",
  "switchgear": "switchgear",
  "automatic generator changeover panels": "automatic generator changeover panels",
  "chemical earthing systems": "chemical earthing systems",
  "transformer": "transformer",
  "transformers": "transformers",
  "switchboard": "switchboard",
  "switchboards": "switchboards",
  "automatic changeover breakers": "automatic changeover breakers",
  "high-speed plc logic": "high-speed plc logic",
  "commissioning of": "commissioning of",
  "design of": "design of",
  "fabrication of": "fabrication of",
  "testing of": "testing of",
  "repair of": "repair of",
  "preventive": "preventive",
  "routine": "routine",
  "servicing": "servicing",
  "medical": "medical",
  "critical": "critical",
  "life-support": "life-support",
  "equipment": "equipment",
  "completely": "completely",
  "safe": "safe",
  "continuous": "continuous",
  "operations": "operations",
  "pre-fabricated": "pre-fabricated",
  "modular": "modular",
  "lags": "lags",
  "by up to": "tak se",
  "up to": "tak",
  "reduce commissioning lags": "commissioning lags kam karein",
  "meet our leadership": "leadership se milein",
  "explore the strategic vision": "strategic vision dekhein",
  "driving": "drive karne wali",
  "founded": "founded",
  "fabricating": "fabricate karte hue",
  "expanded": "expand kiya",
  "received": "mila",
  "credentials": "credentials",
  "advanced": "advanced",
  "modern": "modern",
  "delivered": "deliver kiya",
  "charged": "commission kiya",
  "reaching": "pahunchte hue",
  "milestone": "milestone",
  "projects completed": "projects poore kiye",
  "meet": "milein",
  "founder": "founder",
  "managing director": "managing director",
  "hands-on": "practical",
  "experience": "anubhav",
  "connect": "connect",
  "profile": "profile",
  "mandate": "mandate",
  "convey": "dikhana",
  "competence": "competence",
  "flash": "dikhava",
  "rely": "trust",
  "goal": "aim",
  "offer": "dena",
  "stability": "stability",
  "transparency": "transparency",
  "tier": "tier",
  "certifications": "certifications",
  "career": "career",
  "realizing": "realize karte hue",
  "gap": "gap",
  "local": "local",
  "capacity": "capacity",
  "scaled": "scale kiya",
  "supplier": "supplier",
  "enterprise": "enterprise",
  "contractor": "contractor",
  "worth": "worth",
  "multi-crore": "multi-crore",
  "grid": "grid",
  "deliveries": "deliveries",
  "case": "case",
  "studies": "studies",
  "records": "records",
  "across": "across",
  "completion": "completion",
  "client": "client",
  "technical": "technical",
  "review": "review",
  "started": "shuru kiya",
  "his": "apna",
  "her": "apna",
  "he": "unhone",
  "she": "unhone",
  "was": "tha",
  "were": "the",
  "as": "ke roop mein",
  "a": "ek",
  "an": "ek",
  "but": "lekin",
  "or": "ya",
  "not": "nahi",
  "no": "nahi",
  "into": "mein",
  "under": "ke under",
  "company": "company",
  "since": "se"
};

function autoTranslateToHinglish(text) {
  if (typeof text !== 'string') return text;
  
  let translated = text;
  
  // Replace phrase patterns first (case-insensitive)
  const phrases = [
    { en: "zero tolerance", hi: "bilkul tolerance nahi" },
    { en: "quality standards", hi: "quality ke high standards" },
    { en: "on-time", hi: "samay par" },
    { en: "on time", hi: "time par" },
    { en: "years of", hi: "saal ka" },
    { en: "completed projects", hi: "poore kiye projects" },
    { en: "happy clients", hi: "happy clients" },
    { en: "staff members", hi: "staff members" },
    { en: "safety first", hi: "safety sabse pehle" },
    { en: "high tension", hi: "high tension" },
    { en: "low tension", hi: "low tension" },
    { en: "emergency power", hi: "emergency power" },
    { en: "since 2008", hi: "2008 se" },
    { en: "under his leadership", hi: "unki leadership ke under" }
  ];
  
  for (const phrase of phrases) {
    const regex = new RegExp('\\b' + phrase.en + '\\b', 'gi');
    translated = translated.replace(regex, phrase.hi);
  }
  
  // Replace individual words using regex word boundaries
  const words = Object.keys(autoTranslateWords);
  words.sort((a, b) => b.length - a.length);
  
  for (const word of words) {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    translated = translated.replace(regex, (match) => {
      const isCapitalized = match[0] === match[0].toUpperCase();
      const replacement = autoTranslateWords[word];
      if (isCapitalized && replacement) {
        return replacement[0].toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }
  
  return translated;
}

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('appLanguage');
    return saved === 'hinglish' ? 'hinglish' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  const t = (key) => {
    if (!key) return '';
    const langDict = translations[language] || translations.en;
    if (langDict[key]) return langDict[key];
    if (translations.en[key]) return translations.en[key];
    
    // Auto translate if language is hinglish
    if (language === 'hinglish') {
      return autoTranslateToHinglish(key);
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
