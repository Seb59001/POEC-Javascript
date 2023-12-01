// Fonction pour afficher un overlay moche
function afficherOverLaid() {
    // Créer un élément div pour l'overlay moche
    let overlay = document.createElement('div');

    // Ajout d'un id à la div 
    overlay.className = 'overlaid';

    // Sélectionner le conteneur où l'overlay sera ajouté
    let container = document.querySelector('.containers');

    // Ajouter du texte à l'overlay
    overlay.textContent = 'Overlay Moche';
    
    // Appliquer des styles pour un overlay moche
    overlay.style.backgroundColor = 'yellow';
    overlay.style.border = '2px dashed red';
    overlay.style.padding = '20px';
    overlay.style.fontSize = '18px';

    // Ajouter l'overlay au début du conteneur
    container.appendChild(overlay);
}

// Fonction pour afficher un overlay beau
function afficherOverBeau() {
    // Créer un élément div pour l'overlay beau
    let overbeau = document.createElement('div');

    // Ajout d'un id à la div
    overbeau.className = 'overbeau';

    let container = document.querySelector('.containers');

    // Ajouter du texte à l'overlay
    overbeau.textContent = 'Overlay Beau';
    
    // Appliquer des styles pour un overlay beau
    overbeau.style.backgroundColor = 'lightblue';
    overbeau.style.border = '2px solid navy';
    overbeau.style.padding = '30px';
    overbeau.style.fontSize = '24px';

    // Ajouter l'overlay au début du conteneur
    container.appendChild(overbeau);
}

// Fonction pour fermer l'overlay moche
function fermerOverLaid() {
    let overlaidElements = document.querySelector('div.overlaid');

    overlaidElements.remove();
}

// Fonction pour fermer l'overlay beau
function fermerOverBeau() {
    let overbeauElements = document.querySelector('div.overbeau');

    overbeauElements.remove();
}