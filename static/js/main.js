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

    // Project Cards
    const projectData = {
        name: "My Projects",
        children: [
            { name: "Driving School Management System", link: "https://github.com/GreggIsGreat/DrivingSchoolWebApp", description: "Web app for driving school management, handles registrations and bookings, built with Python and Django, simple interface, secure authentication." },
            { name: "Olympic Analytical Dashboard + Prediction Model", link: "https://olympics-dashboard-ifhe.onrender.com", description: "Dashboard for Olympic data visualization, uses Python for analysis, predicts medals with ML, hosted on Render, filters by country." },
            { name: "Maverick Trading Android Application", link: "https://github.com/GreggIsGreat/Mavrick", description: "Android app for stock trading, built with Java, tracks portfolios, executes trades, fetches real-time data, secure login." },
            { name: "House Price Analysis + Prediction Model", link: "https://colab.research.google.com/drive/12whwft5WCk3tfkHG6n3CGDMq4wtWDcU0", description: "Analyzes housing data, predicts prices with Python ML, processes features, hosted on Colab, visualizes market trends." },
            { name: "Gold Stock Price Analysis + Prediction Model", link: "https://colab.research.google.com/drive/1P7lugZQDvZHQRkybPsIj-uvOwjU2wWuJ", description: "Forecasts gold prices, uses Python for analysis, ML predicts trends, developed on Colab, shows price fluctuations." },
            { name: "AlphaPal Banking System", link: "https://github.com/GreggIsGreat/SecurePayProject2", description: "Banking system for transactions, built with Java, manages accounts, includes encryption, connects to database." }
        ]
    };

    const projectCardsContainer = document.querySelector('.project-cards');
    projectData.children.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <i class="card-icon bx bx-code"></i> <!-- Placeholder icon, adjust as needed -->
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="card-btn">View Project</a>
        `;
        projectCardsContainer.appendChild(card);
    });
});