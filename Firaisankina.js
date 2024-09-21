// Ajouter une animation d'apparition quand l'utilisateur fait défiler la pagedocument.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.image-text-wrapper');

    // Fonction de callback pour Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Pour animer une seule fois
            }
        });
    };

    // Options pour l'Intersection Observer
    const observerOptions = {
        root: null, // Utilise la fenêtre du navigateur comme root
        threshold: 0.1 // Déclenche lorsque 10% de l'élément est visible
    };

    // Initialisation de l'Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observez chaque section
    sections.forEach(section => {
        observer.observe(section);
    });
