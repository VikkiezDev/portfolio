/* =====================================================================
   EDIT YOUR CONTENT HERE. The page renders itself from these arrays.

   TO ADD A NEW EXPERIENCE OR PROJECT:
   1. Copy one {...} object inside the relevant array below
   2. Paste it as a new entry (comma-separated)
   3. Edit the field values
   4. Save — the site updates automatically, styling stays consistent
   ===================================================================== */

const siteData = {
   leetcodeUsername: "Vignesh_Nadar",
   leetcodeFallback: 50,   // shown if the API is ever down

  // Rotating roles shown in the hero typewriter effect
  roles: [
    "scalable data pipelines",
    "cloud data warehouses",
    "clean, trustworthy datasets",
    "insightful dashboards"
  ],

  // ---------------- SKILLS ----------------
  skills: [
    { category: "Languages & Query", items: ["SQL", "Python", "PySpark", "Markdown", "Bash"] },
    { category: "Data Engineering", items: ["Databricks", "Airflow", "Apache Spark", "Kafka"] },
    { category: "Cloud & DevOps", items: ["AWS", "GCP", "Azure", "Git & Github"] },
    { category: "Visualization & BI", items: ["Power BI", "Looker", "Tableau", "Streamlit"] },
    { category: "Databases", items: ["MySQL Server", "Redshift", "BigQuery"] }
  ],

  // ---------------- EXPERIENCE ----------------
  // Newest first. "end" = "Present" for current role.
  experience: [
    {
      role: "Analyst",
      company: "eClerx Pvt Ltd",
      companyUrl: "https://eclerx.com/",
      location: "Airoli, Navi Mumbai",
      start: "May 2025",
      end: "Jul 2026",
      points: [
        "Engineered SQL scripts to clean 6,000+ leads, standardizing core data",
        "Fixed schema errors and formatting, boosting downstream data accuracy",
        "Resolved null values and anomalies to deliver production-ready datasets"
      ],
      tech: ["SQL", "CRM", "Excel"]
    },
    {
      role: "Consultant Analyst",
      company: "eClerx Pvt Ltd",
      companyUrl: "https://eclerx.com/",
      location: "Airoli, Navi Mumbai",
      start: "Nov 2024",
      end: "Mar 2025",
      points: [
        "Built Excel pipelines via VLOOKUPs and Pivots, automating report generation",
        "Standardized raw data workflows, cutting data discrepancies by 95%",
        "Streamlined large-scale data transformations to eliminate manual processing errors"
      ],
      tech: ["Excel", "Avanced Excel", "Python"]
    }
    /* Copy from here to add a new role:
    {
      role: "Job Title",
      company: "Company Name",
      companyUrl: "https://company.com",
      location: "City, Country / Remote",
      start: "Mon Year",
      end: "Present",
      points: [
        "Achievement or responsibility 1",
        "Achievement or responsibility 2"
      ],
      tech: ["Tool1", "Tool2"]
    },
    */
  ],

  // ---------------- PROJECTS ----------------
  // "category" powers the filter buttons — reuse categories to group projects.
  projects: [
    {
      title: "SaaS Vendor Health Monitoring Pipeline",
      category: "Data Engineering",
      description: "Near-real-time SaaS dependency health monitor using AWS Lambda, EventBridge ingestion, medallion architecture with Unity Catalog, and a Power BI.",
      tech: ["AWS", "Databricks", "Unity Catalog", "PySpark", "SQL", "Power BI"],
      github: "https://github.com/VikkiezDev/SaaS-Dependency-Health-Dashboard"
    },
    {
      title: "Payment Analytics Data Warehouse",
      category: "Data Warehousing",
      description: "Production-grade payment analytics data warehouse built on Databricks + AWS S3 using medallion architecture, star schema dimensional modeling, and Delta Lake.",
      tech: ["SQL", "AWS", "Databricks", "Unity Catalog"],
      github: "https://github.com/VikkiezDev/Payment-Analytics-Data-Warehouse"
    },
    {
      title: "Netflix User Behavior & Subscription Analytics",
      category: "Data Analytics",
      description: "This project focuses on performing analytics on Netflix User Database using MySQL and Power BI",
      tech: ["MySQL", "Power BI", "Stored Procedures", "MS Excel"],
      github: "https://github.com/VikkiezDev/Netflix-User-Behavior-Subscription-Analytics"
    },
    {
      title: "HR Employee Attrition Analysis",
      category: "Data Analytics",
      description: "Engineered a Power BI HR attrition dashboard using SQL for data staging and star-schema modeling, Excel for driver analysis, and DAX for key workforce metrics.",
      tech: ["SQL", "Excel", "Power BI"],
      github: "",
      demo: ""   // leave "" if none
    },
    {
      title: "Some Dummy Dashboard",
      category: "Data Visualization",
      description: "Made a dummy dashboard",
      tech: ["SQL", "Excel", "Power BI"],
      github: "",
      demo: ""   // leave "" if none
    }   
    // {
    //   title: "Open Data Warehouse Starter",
    //   category: "Data Engineering",
    //   description: "A reusable dbt + Airflow project template implementing medallion architecture (bronze/silver/gold) for quick-start analytics engineering.",
    //   tech: ["dbt", "Airflow", "PostgreSQL"],
    //   github: "https://github.com/yourusername/project-repo",
    //   demo: ""
    // },
    // {
    //   title: "COVID-19 Trends Explorer",
    //   category: "Analytics",
    //   description: "Analyzed and visualized global COVID-19 case data, uncovering regional trends and building a public exploratory dashboard.",
    //   tech: ["Python", "Pandas", "Plotly", "Streamlit"],
    //   github: "https://github.com/yourusername/project-repo",
    //   demo: "https://your-demo-link.com"
    // },
    // {
    //   title: "A/B Testing Framework",
    //   category: "Analytics",
    //   description: "Internal Python library standardizing statistical significance testing and reporting for product experiments across teams.",
    //   tech: ["Python", "SciPy", "Pandas"],
    //   github: "https://github.com/yourusername/project-repo",
    //   demo: ""
    // }

    /* Copy from here to add a new project:
    {
      title: "Project Title",
      category: "Data Engineering",
      description: "1-2 sentence summary: the problem, your solution, and the impact/result.",
      tech: ["Tool1", "Tool2"],
      github: "https://github.com/yourusername/repo",
      demo: "https://your-demo-link.com"   // leave "" if none
    },
    */
  ],

  // ---------------- EDUCATION ----------------
  education: [
    {
      degree: "M.Sc. in Information Technology",
      institution: "SIES (Nerul) College of Arts, Science and Commerce",
      location: "Nerul, Navi Mumbai",
      start: "Aug 2022",
      end: "Oct 2024",
      details: "Relevant Coursework: Data Science, Deep Learning, Database Management System, Data Analystics"
    },
    {
      degree: "B.Sc. in Information Technology",
      institution: "SIES (Nerul) College of Arts, Science and Commerce",
      location: "Nerul, Navi Mumbai",
      start: "May 2019",
      end: "Jun 2022",
      details: "Relevant Coursework: SQL Querying, Python Programming, Machine Learning, Digital Electronincs"
    }

    /* Copy from here to add a new entry:
    {
      degree: "Degree or Certification Name",
      institution: "School / Issuer",
      location: "City, Country",
      start: "Year",
      end: "Year",
      details: "Short description, honors, or relevant coursework."
    },
    */
  ],

   // Remove the AWS entry from the `education` array, then add this new array:
   certifications: [
     {
       title: "Databricks Certified Data Engineer Associate",
       issuer: "Databricks",
       date: "2026",
       credentialUrl: "https://credentials.databricks.com/060ad033-e6bf-4838-bb33-84b759c2318d#acc.XbeMk2rA",
       credentialId: "176293438"
     },
     {
       title: "Accenture Data Analytics and Visualization Job Simulation",
       issuer: "Forage",
       date: "2025",
       credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_mHkfGjmvMeEz5bgSj_1730048820463_completion_certificate.pdf",
       credentialId: "mHkfGjmvMeEz5bgSj"
     },
     {
       title: "HP Agile Project Management Certification",
       issuer: "HP",
       date: "2025",
       credentialUrl: "https://www.life-global.org/certificate/d919d09a-097b-48ce-8dc4-e2086e4e3322",
       credentialId: "d919d09a-097b-48ce-8dc4-e2086e4e3322"
     },
     {
       title: "Microsoft Certified: Power BI Data Analyst Associate",
       issuer: "Microsoft",
       date: "Exam Scheduled",
       credentialUrl: "",   // leave "" if none
       credentialId: ""                  // leave "" if none
     },
     {
       title: "Microsoft Certified: SQL AI Developer Associate",
       issuer: "Microsoft",
       date: "Exam Scheduled",
       credentialUrl: "",   // leave "" if none
       credentialId: ""                  // leave "" if none
     }
     /* Copy from here to add a new certification:
     {
       title: "Certification Name",
       issuer: "Issuing Organization",
       date: "Year",
       credentialUrl: "https://verify-link.com",   // leave "" if none
       credentialId: "Optional ID"                  // leave "" if none
     },
     */
   ]
};
