// Basit scroll animasyonu (opsiyonel)
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 1.3;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});
