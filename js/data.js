/* =====================================================================
   EDIT YOUR CONTENT HERE. The page renders itself from these arrays.

   TO ADD A NEW EXPERIENCE OR PROJECT:
   1. Copy one {...} object inside the relevant array below
   2. Paste it as a new entry (comma-separated)
   3. Edit the field values
   4. Save — the site updates automatically, styling stays consistent
   ===================================================================== */

const siteData = {
   leetcodeUsername: "your-leetcode-username",
   leetcodeFallback: 450,   // shown if the API is ever down

  // Rotating roles shown in the hero typewriter effect
  roles: [
    "scalable data pipelines",
    "cloud data warehouses",
    "clean, trustworthy datasets",
    "dashboards people actually use"
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
        "Redesigned the core ELT pipeline, cutting nightly load time from 6 hours to 45 minutes",
        "Built a self-serve data warehouse layer used by 12+ teams for reporting and analytics",
        "Introduced dbt-based testing and documentation, reducing data quality incidents by 70%"
      ],
      tech: ["Python", "Airflow", "Snowflake", "dbt", "AWS"]
    },
    {
      role: "Consultant Analyst",
      company: "eClerx Pvt Ltd",
      companyUrl: "https://eclerx.com/",
      location: "Airoli, Navi Mumbai",
      start: "Nov 2024",
      end: "Mar 2025",
      points: [
        "Built executive dashboards tracking revenue, churn, and inventory across 40+ stores",
        "Automated weekly reporting, saving the analytics team ~10 hours per week",
        "Partnered with product teams to define and track key business metrics"
      ],
      tech: ["SQL", "Tableau", "Python", "PostgreSQL"]
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
      title: "Real-Time Sales Pipeline",
      category: "Data Engineering",
      description: "Streaming pipeline ingesting live sales events via Kafka, transforming with Spark, and loading into Snowflake for near real-time dashboards.",
      tech: ["Kafka", "Spark", "Snowflake", "Airflow"],
      github: "https://github.com/yourusername/project-repo",
      demo: ""
    },
    {
      title: "Customer Churn Predictor",
      category: "Machine Learning",
      description: "End-to-end ML pipeline predicting customer churn with 88% accuracy, including feature engineering, model training, and a deployed scoring API.",
      tech: ["Python", "scikit-learn", "FastAPI", "Docker"],
      github: "https://github.com/yourusername/project-repo",
      demo: "https://your-demo-link.com"
    },
    {
      title: "Marketing Attribution Dashboard",
      category: "Visualization",
      description: "Interactive Tableau dashboard unifying data from five marketing platforms to track campaign ROI and multi-touch attribution.",
      tech: ["Tableau", "SQL", "Python"],
      github: "",
      demo: "https://your-demo-link.com"
    },
    {
      title: "Open Data Warehouse Starter",
      category: "Data Engineering",
      description: "A reusable dbt + Airflow project template implementing medallion architecture (bronze/silver/gold) for quick-start analytics engineering.",
      tech: ["dbt", "Airflow", "PostgreSQL"],
      github: "https://github.com/yourusername/project-repo",
      demo: ""
    },
    {
      title: "COVID-19 Trends Explorer",
      category: "Analytics",
      description: "Analyzed and visualized global COVID-19 case data, uncovering regional trends and building a public exploratory dashboard.",
      tech: ["Python", "Pandas", "Plotly", "Streamlit"],
      github: "https://github.com/yourusername/project-repo",
      demo: "https://your-demo-link.com"
    },
    {
      title: "A/B Testing Framework",
      category: "Analytics",
      description: "Internal Python library standardizing statistical significance testing and reporting for product experiments across teams.",
      tech: ["Python", "SciPy", "Pandas"],
      github: "https://github.com/yourusername/project-repo",
      demo: ""
    }

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
      start: "2022",
      end: "2024",
      details: "Focus on distributed systems and statistical modeling. Thesis on scalable anomaly detection in streaming data."
    },
    {
      degree: "B.Sc. in Information Technology",
      institution: "SIES (Nerul) College of Arts, Science and Commerce",
      location: "Nerul, Navi Mumbai",
      start: "2019",
      end: "2022",
      details: "Graduated with honors. Coursework in databases, algorithms, and applied statistics."
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
       title: "AWS Certified Data Analytics – Specialty",
       issuer: "Amazon Web Services",
       date: "2023",
       credentialUrl: "https://www.credly.com/your-badge-link",
       credentialId: "ABC123XYZ"
     },
     {
       title: "AWS Certified Data Analytics – Specialty",
       issuer: "Amazon Web Services",
       date: "2023",
       credentialUrl: "https://www.credly.com/your-badge-link",
       credentialId: "ABC123XYZ"
     },
     {
       title: "AWS Certified Data Analytics – Specialty",
       issuer: "Amazon Web Services",
       date: "2023",
       credentialUrl: "https://www.credly.com/your-badge-link",
       credentialId: "ABC123XYZ"
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
