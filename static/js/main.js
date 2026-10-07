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

    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Function to filter projects
    function filterProjects(category) {
        projectCards.forEach(card => {
            // Show all cards if 'all' is selected, otherwise show only matching category
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            }
        });
    }

    // Set up filter button click handlers
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get filter category and filter projects
            const filterCategory = button.getAttribute('data-filter');
            filterProjects(filterCategory);
        });
    });

    // Initial animation for project cards
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Mobile card expansion functionality
    if (window.innerWidth <= 768) {
        projectCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Don't expand if clicking on a link
                if (e.target.tagName === 'A') return;

                this.classList.toggle('expanded');
            });
        });
    }

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

    // Project Modal functionality
    const modal = document.getElementById('project-modal');
    const modalIframe = document.getElementById('modal-iframe');
    const modalTitle = document.getElementById('modal-title');
    const modalExternalLink = document.getElementById('modal-external-link');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalTriggers = document.querySelectorAll('.project-modal-trigger');

    // Open modal when clicking on project trigger
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const projectUrl = trigger.getAttribute('data-project-url');
            const projectTitle = trigger.closest('.project-card').querySelector('h3').textContent;
            
            modalTitle.textContent = projectTitle;
            modalIframe.src = projectUrl;
            modalExternalLink.href = projectUrl;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when clicking X button
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalIframe.src = ''; // Clear iframe to stop video/audio
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalIframe.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            modalIframe.src = '';
            document.body.style.overflow = 'auto';
        }
    });
});

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
});