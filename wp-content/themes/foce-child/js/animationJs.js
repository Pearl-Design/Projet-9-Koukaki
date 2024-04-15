document.addEventListener('DOMContentLoaded', function () {
    // ANIMATION DES SECTIONS A L'AFFICHAGE A L'ECRAN
    animateSections();

    // PARALLAXE VIDEO
    initParallaxVideo();

    // CARROUSEL
    initSwiper();

    // NUAGE
    initClouds();

    // ENLEVER LE SCROLL QUAND LE MENU EST OUVERT
    initMenuToggle();
});

function animateSections() {
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
                }, 1300);   
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

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

function initParallaxVideo() {
    const video = document.querySelector('.video');

    new simpleParallax(video, {
        orientation: 'right',
        scale: 1.15,
        delay: 0.5,
        transition: 'ease-in-out'
    });
}

function initSwiper() {
    const swiper = new Swiper(".swiper", {
        direction: 'horizontal',
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 1000,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: true,
        loopedSlides: 2,
        loopAdditionalSlides: 1,
        effect: "coverflow",
        coverflowEffect: {
            slideShadows: false,
            rotate: 70,
            stretch: 0,
            depth: 100,
            modifier: 1,
        },
    });
}

function initClouds() {
    const place = document.getElementById('place');
    const bigCloud = place.querySelector('.bigCloud');
    const littleCloud = place.querySelector('.littleCloud');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        moveClouds(bigCloud, littleCloud, scrollPosition);
    });
}

function moveClouds(bigCloud, littleCloud, scrollPosition) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollPosition / maxScroll;
    
    const xPosBig = -progress * 500;
    const xPosLittle = -progress * 500;

    bigCloud.style.transform = `translateX(${xPosBig}px)`;
    littleCloud.style.transform = `translateX(${xPosLittle}px)`;
}

function initMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.body;

    menuToggle.addEventListener('click', function () {
        body.style.overflow = body.style.overflowY === 'hidden' ? 'auto' : 'hidden';
    });
}
