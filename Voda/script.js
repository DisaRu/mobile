document.addEventListener('DOMContentLoaded', function() {
    // Function to load HTML content into a given element
    function loadHTML(url, elementId, callback) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    // Function to initialize the page after header is loaded
    function initializePage() {
        const themeToggle = document.getElementById('theme-toggle');
        const burgerMenu = document.querySelector('.burger-menu');
        const navList = document.getElementById('nav-list');
        const navLinks = document.querySelectorAll('#nav-list a');

        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                const themeIcon = this.querySelector('i');
                if (document.body.classList.contains('dark-mode')) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            });
        }

        if (burgerMenu && navList) {
            burgerMenu.addEventListener('click', function() {
                navList.classList.toggle('active');
            });

            // Add event listeners to nav links to hide the menu
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navList.classList.remove('active');
                });
            });
        }

        // Reapply smooth scrolling for anchor links after header is loaded
        setupSmoothScrolling();
    }

    // Function to set up smooth scrolling for anchor links
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                const navList = document.getElementById('nav-list');
                if (navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            });
        });
    }

    // Load header and footer, and initialize page after header is loaded
    loadHTML('../header.html', 'header-placeholder', initializePage);
    loadHTML('../footer.html', 'footer-placeholder');

    // Initialize card sliders
    function initializeSliders() {
        document.querySelectorAll('.card-slider').forEach(function(slider) {
            let currentIndex = 0;
            const images = slider.querySelectorAll('img');
            const prevButton = slider.querySelector('.prev');
            const nextButton = slider.querySelector('.next');
            images[currentIndex].classList.add('active');

            function showImage(index) {
                images.forEach(img => img.classList.remove('active'));
                images[index].classList.add('active');
            }

            if (prevButton && nextButton) {
                prevButton.addEventListener('click', function(e) {
                    e.stopPropagation();
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    showImage(currentIndex);
                });

                nextButton.addEventListener('click', function(e) {
                    e.stopPropagation();
                    currentIndex = (currentIndex + 1) % images.length;
                    showImage(currentIndex);
                });
            }
        });
    }

    // Initialize sliders after the page is fully loaded
    initializeSliders();
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function showItem(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });
});