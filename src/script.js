// Sample project data with image placeholders
const projects = [
    { 
        title: 'Walmart sales data analysis', 
        description: 'Analyzing sales data using Python.', 
        tags: ['Python','Data Visualization'],
        img: 'https://th.bing.com/th/id/OIP.1bv0L9lpb8TF98ISR-pj8gHaGL?w=224&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        link: 'https://github.com/VikkiezDev/Python-Data-Analytics' // Add a link for each project (replace '#' with actual URLs)
    },
    { 
        title: 'Online Retail Analytics with PSQL', 
        description: 'Analyzing online retails data Postgresql.', 
        tags: ['Postgresql', 'PgAdmin4', 'Azure Data Studio','Data Visualization'],
        img: 'https://www.specialityfoodmagazine.com/assets/images/other/online_marketplaces.jpg',
        link: 'https://github.com/VikkiezDev/Online-Retail-Analytics-PSQL'
    },
    { 
        title: 'ETL Pipeline with Apache Airflow', 
        description: 'Created an ETL pipeline which runs every 5 mins (source - Postgres | Destination - MySQL)', 
        tags: ['Apache Airflow', 'Python', 'Postgres', 'MySQL', 'ETL'],
        img: 'https://theaisummer.com/static/c9ade90b8812a0958915563e5058db44/ee604/apache-airflow-tutorial.png',
        link: 'https://github.com/VikkiezDev/ETL-with-Apache-Airflow'
    }
];

// Function to create project cards
function createProjectCards() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Clear previous content
    projects.forEach(project => {
        const link = document.createElement('a');
        link.href = project.link;
        link.classList.add('project-card-link');

        const card = document.createElement('div');
        card.classList.add('project-card');

        // Create image element
        const img = document.createElement('img');
        img.src = project.img;
        img.alt = project.title;

        const title = document.createElement('h3');
        title.textContent = project.title;

        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('tags-container');

        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('pill');
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });

        const description = document.createElement('p');
        description.textContent = project.description;

        // Append all elements to the card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(tagsContainer);
        card.appendChild(description);

        // Append the card to the link
        link.appendChild(card);

        // Append the link (containing the card) to the project list
        projectList.appendChild(link);
    });
}

// Filter projects based on search input
document.getElementById('search-bar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProjects = projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Clear previous content
    filteredProjects.forEach(project => {
        const link = document.createElement('a');
        link.href = project.link;
        link.classList.add('project-card-link');

        const card = document.createElement('div');
        card.classList.add('project-card');

        // Create image element
        const img = document.createElement('img');
        img.src = project.img;
        img.alt = project.title;

        const title = document.createElement('h3');
        title.textContent = project.title;

        // Create tag container and tag pills
        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('tags-container');
        project.tags.forEach(tag => {
            const tagPill = document.createElement('span');
            tagPill.classList.add('pill');
            tagPill.textContent = tag;
            tagsContainer.appendChild(tagPill);
        });

        // Append elements to card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(tagsContainer);

        // Append the card to the link
        link.appendChild(card);

        // Add link (containing the card) to the project list
        projectList.appendChild(link);
    });
});

// Initialize projects on page load
createProjectCards();

// Sample certification data
const certifications = [
    { imgSrc: 'https://raw.githubusercontent.com/VikkiezDev/portfolio/refs/heads/main/assets/AWS%20Certificate.PNG' },
    { imgSrc: 'https://via.placeholder.com/500x350' },
    { imgSrc: 'https://via.placeholder.com/500x350' },
    // Add more certifications here
];

// Function to create certification cards
function createCertificationCards() {
    const certificationList = document.getElementById('certification-list');
    certificationList.innerHTML = ''; // Clear previous content

    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.classList.add('certification-card');
        
        const img = document.createElement('img');
        img.src = cert.imgSrc;
        img.alt = 'Certification Image';

        card.appendChild(img);
        certificationList.appendChild(card);
    });
}

// Initialize certification cards on page load
createCertificationCards();


// Scroll to Top Button
const backToTopButton = document.getElementById('back-to-top');

// Show the button when the user scrolls down 100px
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

// Scroll smoothly to the top when the button is clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

