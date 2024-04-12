/* ANIMATION DES SECTIONS A L AFFICHAGE A L ECRAN */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.story, #studio, .nomination');

    sections.forEach(section => {
        const title = section.querySelector('h2');
        if (title && !section.classList.contains('nomination')) {
            convertToSpanStructure(title);
        }
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animateSection');
                setTimeout(() => {
                    animateTitle(entry.target);
                }, 1500); // Delay set to 1.5 seconds
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    function convertToSpanStructure(title) {
        const words = title.textContent.split(' ');
        title.innerHTML = '';

        words.forEach((word) => {
            const span = document.createElement('span');
            span.textContent = word;
            title.appendChild(span);
        });
    }

    function animateTitle(section) {
        const title = section.querySelector('h2');

        if (!title) return;

        const spans = title.querySelectorAll('span');
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('animateTitle');
            }, index * 30); // Adjust the delay here as needed
        });
    }
});

/* PARALLAXE VIDEO */
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video');

    new simpleParallax(video, {
        orientation: 'right',
        scale: 1.15,
        delay: 0.5,
        transition: 'ease-in-out'
    });
});

