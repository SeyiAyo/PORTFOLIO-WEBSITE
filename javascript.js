        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
        });

        // Scrollspy
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

                if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
        link.classList.remove('text-blue-500');
    if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('text-blue-500');
                }
            });
        });