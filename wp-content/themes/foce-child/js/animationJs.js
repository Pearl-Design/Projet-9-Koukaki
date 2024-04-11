document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.story, #studio, .nomination');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => {
    observer.observe(section);
  });
});
