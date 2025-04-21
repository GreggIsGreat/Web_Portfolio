document.addEventListener('DOMContentLoaded', () => {
    // Typed.js animation
    var typed = new Typed(".multiple-text", {
        strings: ["Data Scientist", "Developer", "Data Analyst", "Machine Learning Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Function to update active nav link based on scroll position
    window.addEventListener('scroll', () => {
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('.navbar a');

        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('.navbar a[href*=' + id + ']')?.classList.add('active');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Enhanced Project Cards with Categories
    const projectData = [
        {
            name: "Driving School Management System",
            link: "https://github.com/GreggIsGreat/DrivingSchoolWebApp",
            description: "Web app for driving school management, handles registrations and bookings, built with Python and Django, simple interface, secure authentication.",
            category: "web",
            technologies: ["Python", "Django", "SQL", "HTML/CSS"],
            icon: "bx bx-car"
        },
        {
            name: "Olympic Analytical Dashboard + Prediction Model",
            link: "https://olympics-dashboard-ifhe.onrender.com",
            description: "Dashboard for Olympic data visualization, uses Python for analysis, predicts medals with ML, hosted on Render, filters by country.",
            category: "data",
            technologies: ["Python", "Pandas", "Machine Learning", "Data Visualization"],
            icon: "bx bx-line-chart"
        },
        {
            name: "Maverick Trading Android Application",
            link: "https://github.com/GreggIsGreat/Mavrick",
            description: "Android app for stock trading, built with Java, tracks portfolios, executes trades, fetches real-time data, secure login.",
            category: "mobile",
            technologies: ["Java", "Android", "API Integration", "UI/UX"],
            icon: "bx bxl-android"
        },
        {
            name: "House Price Analysis + Prediction Model",
            link: "https://colab.research.google.com/drive/12whwft5WCk3tfkHG6n3CGDMq4wtWDcU0",
            description: "Analyzes housing data, predicts prices with Python ML, processes features, hosted on Colab, visualizes market trends.",
            category: "data",
            technologies: ["Python", "Machine Learning", "Data Analysis", "Visualization"],
            icon: "bx bx-home"
        },
        {
            name: "Gold Stock Price Analysis + Prediction Model",
            link: "https://colab.research.google.com/drive/1P7lugZQDvZHQRkybPsIj-uvOwjU2wWuJ",
            description: "Forecasts gold prices, uses Python for analysis, ML predicts trends, developed on Colab, shows price fluctuations.",
            category: "data",
            technologies: ["Python", "Time Series Analysis", "Forecasting", "Data Science"],
            icon: "bx bx-trending-up"
        },
        {
            name: "AlphaPal Banking System",
            link: "https://github.com/GreggIsGreat/SecurePayProject2",
            description: "Banking system for transactions, built with Java, manages accounts, includes encryption, connects to database.",
            category: "web",
            technologies: ["Java", "Database", "Security", "Web Development"],
            icon: "bx bx-money"
        }
    ];

    const projectCardsContainer = document.querySelector('.project-cards');

    // Function to render project cards
    function renderProjects(category = 'all') {
        // Clear existing cards
        projectCardsContainer.innerHTML = '';

        // Filter projects based on category
        const filteredProjects = category === 'all'
            ? projectData
            : projectData.filter(project => project.category === category);

        // Check if there are any projects in the selected category
        if (filteredProjects.length === 0) {
            projectCardsContainer.innerHTML = `
                <div class="no-projects">
                    <p>No projects found in this category.</p>
                </div>
            `;
            return;
        }

        // Render filtered projects
        filteredProjects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            card.setAttribute('data-category', project.category);

            // Create technologies badges HTML
            const techBadges = project.technologies.map(tech =>
                `<span class="tech-badge">${tech}</span>`
            ).join('');

            card.innerHTML = `
                <i class="card-icon ${project.icon}"></i>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="tech-badges">
                    ${techBadges}
                </div>
                <a href="${project.link}" target="_blank" class="card-btn">View Project</a>
            `;

            projectCardsContainer.appendChild(card);

            // Add animation to make cards appear with a slight delay
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * (projectCardsContainer.children.length));
        });
    }

    // Initial render of all projects
    renderProjects();

    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get filter category and render projects
            const filterCategory = button.getAttribute('data-filter');
            renderProjects(filterCategory);
        });
    });

    // Animate progress bars when they come into view
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress');
        const triggerBottom = window.innerHeight * 0.8;

        progressBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;

            if (barTop < triggerBottom) {
                const width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                bar.style.width = width;
            } else {
                bar.style.width = '0';
            }
        });
    };

    // Run animation on scroll
    window.addEventListener('scroll', animateProgressBars);

    // Run animation on initial load
    setTimeout(animateProgressBars, 500);
});