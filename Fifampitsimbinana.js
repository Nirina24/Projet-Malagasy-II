// Fonction pour animer le contenu lorsqu'il entre dans le champ de vision
window.addEventListener('scroll', () => {
    const content = document.querySelectorAll('.content div');

    content.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible');
        }
    });
});
