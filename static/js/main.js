document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".multiple-text", {
        strings: ["Data Scientist", "Developer", "Data Analyst", "Machine Learning Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

// Function to update active nav link based on scroll position
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar a');

    // Loop through each section
    sections.forEach(section => {
        // Get the current scroll position relative to each section
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        // Check if the section is currently in view
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the current section's nav link
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });
});



window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    // Add or remove the 'scrolled' class based on the scroll position
    if (window.scrollY > 50) { // Adjust the value based on when you want the background to appear
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

