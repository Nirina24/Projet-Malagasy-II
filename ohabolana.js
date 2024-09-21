// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter la classe visible aux sections
function handleScroll() {
    var sections = document.querySelectorAll('.ohabolana-section');
    sections.forEach(function(section) {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Ajouter un événement pour déclencher l'animation lors du défilement
window.addEventListener('scroll', handleScroll);

// Appeler handleScroll immédiatement pour que les éléments déjà visibles apparaissent
handleScroll();
