// Sample project data with image placeholders
const projects = [
    { 
        title: 'Sales Analysis', 
        description: 'Analyzing sales data using Power BI.', 
        tags: ['Power BI', 'Data Visualization'],
        img: 'https://via.placeholder.com/100' // Add a placeholder image URL
    },
    { 
        title: 'Customer Segmentation', 
        description: 'K-means clustering on customer data.', 
        tags: ['Python', 'Machine Learning'],
        img: 'https://via.placeholder.com/100' // Add a placeholder image URL
    },
    { 
        title: 'Inventory Management', 
        description: 'SQL-based inventory tracking and analysis.', 
        tags: ['SQL', 'Excel'],
        img: 'https://via.placeholder.com/100' // Add a placeholder image URL
    },
    { 
        title: 'Marketing Campaign Analysis', 
        description: 'Effectiveness of marketing campaigns.', 
        tags: ['R', 'Data Visualization'],
        img: 'https://via.placeholder.com/100' // Add a placeholder image URL
    }
];

// Function to create project cards
function createProjectCards() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Clear previous content
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Create image element
        const img = document.createElement('img');
        img.src = project.img; // Set the source to the image URL
        img.alt = project.title; // Set alt text for accessibility

        const title = document.createElement('h3');
        title.textContent = project.title;

        const tagsContainer = document.createElement('div'); // Create a container for tags
        tagsContainer.classList.add('tags-container'); // Add a class for styling

        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('pill'); // Add class for styling
            tagElement.textContent = tag; // Set tag text
            tagsContainer.appendChild(tagElement); // Append the tag to the container
        });

        const description = document.createElement('p'); // Create a paragraph for the description
        description.textContent = project.description; // Set the description text

        // Append all elements to the card
        card.appendChild(img); // Append the image to the card
        card.appendChild(title);
        card.appendChild(tagsContainer); // Append the tags container
        card.appendChild(description); // Append the description below the tags

        projectList.appendChild(card);
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
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Create image element
        const img = document.createElement('img');
        img.src = project.img; // Use the same image URL
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

        // Add card to the project list
        projectList.appendChild(card);
    });
});

// Initialize projects on page load
createProjectCards();

// Sample certification data
const certifications = [
    { imgSrc: 'https://via.placeholder.com/500x350' },
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

