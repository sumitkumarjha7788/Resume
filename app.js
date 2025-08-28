// Resume data
const resumeData = {
  "personal": {
    "name": "Sumit Kumar Jha",
    "email": "sumitiyha7788@gmail.com",
    "linkedin": "www.linkedin.com/in/sumit-kumar-jha-7788vampyr"
  },
  "roles": {
    "ML Engineer": {
      "title": "Senior Machine Learning Engineer",
      "summary": "Experienced Senior ML Engineer with over 6 years in designing and optimizing scalable AI solutions. Expert in Deep Learning, MLOps, and model deployment. Proven track record in reducing operational costs by 85-90% through advanced ML implementations and automated solutions."
    },
    "Data Scientist": {
      "title": "Senior Data Scientist",
      "summary": "Experienced Senior Data Scientist with over 6 years in predictive analytics and statistical modeling. Expert in time series analysis, data visualization, and business intelligence. Achieved 40% cost savings through advanced analytics and data-driven insights."
    },
    "AI Engineer": {
      "title": "Senior AI Engineer", 
      "summary": "Experienced Senior AI Engineer with over 6 years in building intelligent systems and automation solutions. Expert in LLMs, NLP, Computer Vision, and AI Agents. Specialized in GPT fine-tuning, RAG systems, and end-to-end AI solution deployment."
    }
  },
  "skills": {
    "technical": ["Python", "R", "Java", "Spark", "GCP (Vertex AI, BigQuery)", "Azure (Machine Learning, Azure AI services)", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Tableau", "Power BI", "Matplotlib", "Seaborn", "SQL", "NoSQL", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Jenkins", "MLflow"],
    "domain": ["Natural Language Processing (NLP)", "Computer Vision", "Machine learning Algorithms", "Generative AI & LLMs", "RAG", "AI AGENTS", "Data science", "Predictive Analytics", "Time series Predictions", "EDA"],
    "soft": ["Problem-solving and analytical thinking", "Communication and teamwork", "Leadership and mentoring"]
  },
  "experience": [
    {
      "company": "Orange Business",
      "roles": [
        {
          "title": "Senior Machine Learning Engineer",
          "dates": "November 2024 - Present (10 months)",
          "location": "Gurugram, Haryana, India",
          "details": [
            "Design and develop advanced machine learning models and AI solutions, reducing FTE by 85-90% for RCA through GPT and LLM fine-tuning",
            "Automate visual document classification for consistency checks using LayoutLM",
            "Lead data pipeline development, ensuring scalability and accuracy",
            "Collaborate with stakeholders to deliver high-impact AI solutions"
          ]
        },
        {
          "title": "Machine Learning Engineer", 
          "dates": "May 2023 - October 2024 (1 year 6 months)",
          "location": "Gurugram, Haryana, India",
          "details": [
            "Achieved 40% improvement in cost savings through time series analysis and predictive modeling",
            "Implemented machine learning models for threshold breach prediction",
            "Optimized data pipelines for scalability and accuracy"
          ]
        },
        {
          "title": "Test Automation Engineer",
          "dates": "February 2021 - April 2023 (2 years 3 months)", 
          "location": "Gurugram, Haryana, India",
          "details": [
            "Developed automated test scripts, reducing testing time by 65% across 10 applications",
            "Implemented comprehensive testing suites (smoke, sanity, functional, API)",
            "Enhanced product quality through modularized automation frameworks"
          ]
        },
        {
          "title": "Graduate Engineering Trainee",
          "dates": "July 2020 - February 2021 (8 months)",
          "location": "Gurugram, Haryana, India", 
          "details": [
            "Participated in comprehensive training programs",
            "Gained hands-on experience in software development and testing"
          ]
        },
        {
          "title": "Intern",
          "dates": "September 2019 - June 2020 (10 months)",
          "location": "Gurugram, Haryana, India",
          "details": [
            "Assisted in software development and testing activities",
            "Contributed to team projects and learned industry best practices"
          ]
        }
      ]
    },
    {
      "company": "Altruist Technologies Pvt. Ltd.",
      "roles": [
        {
          "title": "Internship",
          "dates": "June 2019 - September 2019 (4 months)",
          "location": "Panchkula, India",
          "details": [
            "Gained practical experience in software development and testing",
            "Worked under experienced professionals to learn industry standards"
          ]
        }
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Technology - BTech (Honours)",
      "major": "Computer Software Engineering", 
      "institution": "Baddi University of Emerging Sciences and Technology",
      "location": "Budha (Makhnumajra), Solan",
      "years": "2016 - 2020"
    }
  ],
  "certifications": [
    "AWS Certified Machine Learning Engineer - Associate",
    "Microsoft Certified: Azure Data Scientist Associate", 
    "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    "Certificate of completion - Deep Learning with TensorFlow 2",
    "Deep Learning Specialization",
    "The Machine Learning Algorithms AZ",
    "Certificate of completion - Data Strategy"
  ],
  "awards": [
    "Employee of the Semester",
    "'Synergy' award - Team of the semester"
  ]
};

// Role-specific skill highlights
const roleSkillHighlights = {
  "ML Engineer": [
    "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "MLflow", "Docker", "Kubernetes",
    "Machine learning Algorithms", "Deep Learning", "Python"
  ],
  "Data Scientist": [
    "Python", "R", "Tableau", "Power BI", "SQL", "PostgreSQL", 
    "Predictive Analytics", "Time series Predictions", "EDA", "Data science"
  ],
  "AI Engineer": [
    "Python", "TensorFlow", "PyTorch", "GCP (Vertex AI, BigQuery)", "Azure (Machine Learning, Azure AI services)",
    "Natural Language Processing (NLP)", "Computer Vision", "Generative AI & LLMs", "RAG", "AI AGENTS"
  ]
};

// Current selected role
let currentRole = "ML Engineer";

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Populate initial content
  populateSkills();
  populateExperience();
  populateCertifications();
  populateAwards();
  
  // Set up event listeners
  setupRoleSelector();
  setupActionButtons();
  
  // Update content for default role
  updateRoleContent(currentRole);
});

// Role selector functionality
function setupRoleSelector() {
  const roleTabs = document.querySelectorAll('.role-tab');
  
  roleTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const role = this.dataset.role;
      
      // Update active tab
      roleTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Update content
      currentRole = role;
      updateRoleContent(role);
    });
  });
}

// Update content based on selected role
function updateRoleContent(role) {
  const roleData = resumeData.roles[role];
  
  if (!roleData) {
    console.error('Role data not found for:', role);
    return;
  }
  
  // Update title with animation
  const titleElement = document.getElementById('currentTitle');
  if (titleElement) {
    titleElement.style.opacity = '0';
    titleElement.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      titleElement.textContent = roleData.title;
      titleElement.style.opacity = '1';
      titleElement.style.transform = 'translateY(0)';
    }, 200);
  }
  
  // Update summary with animation
  const summaryElement = document.getElementById('summaryContent');
  if (summaryElement) {
    summaryElement.style.opacity = '0';
    summaryElement.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      const summaryParagraph = summaryElement.querySelector('p');
      if (summaryParagraph) {
        summaryParagraph.textContent = roleData.summary;
      } else {
        summaryElement.innerHTML = `<p>${roleData.summary}</p>`;
      }
      summaryElement.style.opacity = '1';
      summaryElement.style.transform = 'translateY(0)';
      summaryElement.classList.add('fade-in');
    }, 200);
  }
  
  // Update skill highlights
  updateSkillHighlights(role);
}

// Populate skills sections
function populateSkills() {
  const technicalSkills = document.getElementById('technicalSkills');
  const domainSkills = document.getElementById('domainSkills');
  const softSkills = document.getElementById('softSkills');
  
  // Technical skills
  if (technicalSkills) {
    technicalSkills.innerHTML = resumeData.skills.technical
      .map(skill => `<span class="skill-tag" data-skill="${skill}">${skill}</span>`)
      .join('');
  }
  
  // Domain skills
  if (domainSkills) {
    domainSkills.innerHTML = resumeData.skills.domain
      .map(skill => `<span class="skill-tag" data-skill="${skill}">${skill}</span>`)
      .join('');
  }
  
  // Soft skills
  if (softSkills) {
    softSkills.innerHTML = resumeData.skills.soft
      .map(skill => `<span class="skill-tag" data-skill="${skill}">${skill}</span>`)
      .join('');
  }
}

// Update skill highlights based on role
function updateSkillHighlights(role) {
  const highlightedSkills = roleSkillHighlights[role] || [];
  const allSkillTags = document.querySelectorAll('.skill-tag');
  
  allSkillTags.forEach(tag => {
    const skillName = tag.dataset.skill;
    tag.classList.remove('highlighted');
    
    // Check if this skill should be highlighted for the current role
    const isHighlighted = highlightedSkills.some(highlight => {
      return skillName.toLowerCase().includes(highlight.toLowerCase()) || 
             highlight.toLowerCase().includes(skillName.toLowerCase()) ||
             skillName === highlight;
    });
    
    if (isHighlighted) {
      tag.classList.add('highlighted');
    }
  });
}

// Populate experience section
function populateExperience() {
  const experienceList = document.getElementById('experienceList');
  
  if (!experienceList) return;
  
  const experienceHTML = resumeData.experience.map(company => {
    const rolesHTML = company.roles.map(role => `
      <div class="role-item">
        <div class="role-header">
          <h5 class="role-title">${role.title}</h5>
          <span class="role-dates">${role.dates}</span>
        </div>
        <p class="role-location">${role.location}</p>
        <ul class="role-details">
          ${role.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
      </div>
    `).join('');
    
    return `
      <div class="experience-item card">
        <h4 class="company-name">${company.company}</h4>
        ${rolesHTML}
      </div>
    `;
  }).join('');
  
  experienceList.innerHTML = experienceHTML;
}

// Populate certifications section
function populateCertifications() {
  const certificationsList = document.getElementById('certificationsList');
  
  if (!certificationsList) return;
  
  const certificationsHTML = resumeData.certifications.map(cert => `
    <div class="certification-item">
      <div class="certification-text">${cert}</div>
    </div>
  `).join('');
  
  certificationsList.innerHTML = certificationsHTML;
}

// Populate awards section
function populateAwards() {
  const awardsList = document.getElementById('awardsList');
  
  if (!awardsList) return;
  
  const awardsHTML = resumeData.awards.map(award => `
    <div class="award-item">
      <div class="award-text">${award}</div>
    </div>
  `).join('');
  
  awardsList.innerHTML = awardsHTML;
}

// Setup action buttons
function setupActionButtons() {
  const exportBtn = document.getElementById('exportBtn');
  const printBtn = document.getElementById('printBtn');
  
  if (exportBtn) {
    exportBtn.addEventListener('click', function() {
      // Simulate PDF export
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-success);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 1000;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
      `;
      notification.textContent = '📄 Resume exported to PDF successfully!';
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 3000);
    });
  }
  
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      window.print();
    });
  }
}

// Add smooth scrolling to sections
function smoothScrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Add intersection observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observe all sections for animations
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
  if (e.altKey) {
    switch(e.key) {
      case '1':
        const mlTab = document.querySelector('[data-role="ML Engineer"]');
        if (mlTab) mlTab.click();
        break;
      case '2':
        const dsTab = document.querySelector('[data-role="Data Scientist"]');
        if (dsTab) dsTab.click();
        break;
      case '3':
        const aiTab = document.querySelector('[data-role="AI Engineer"]');
        if (aiTab) aiTab.click();
        break;
      case 'p':
        const printBtn = document.getElementById('printBtn');
        if (printBtn) printBtn.click();
        break;
      case 'e':
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) exportBtn.click();
        break;
    }
  }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  #currentTitle, #summaryContent {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;
document.head.appendChild(style);