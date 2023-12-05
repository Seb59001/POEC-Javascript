// Pour cet exercice il vous faudra obligatoirement créer 2 fonctions :

/*

- Une fonction displayImage qui permettra l'ouverture d'un l'overlay avec l'image et la croix
- Une fonction removeImage qui permettra la suppression de l'overlay
Vous pouvez vous aider de l'exercice sur l'overlay qui utilise le même principe

Les datasets seront également nécessaires pour pouvoir identifier l'image à faire apparaître dans l'overlay.

*/

// Sélection de toutes les image, et création d'un écouteur d'événement pour chacune d'entre elles
document.querySelectorAll('div>img').forEach((image) => {

    image.addEventListener('click', function(){

        displayImage(image);
    });

});

// Fonction pour faire apparaître l'image au clic de sa miniature

function displayImage(image) {

    // Selection de toutes les images
    let gallery = document.querySelector(".gallery")

    // Création de la div pour l'overlay
    let overlay = document.createElement('div');

    // Ajout de la classe overlay à la div
    overlay.classList.add("overlay");

    // insertion de l'overlay dans la grande div
    gallery.prepend(overlay);


    // Création d'un élément image
    let imageToOpen = document.createElement('img');

    // Récupération de la valeur de l'attribut data
    let srcImageToOpen = image.dataset.image;

    // Attribution de l'attribut à l'image
    imageToOpen.setAttribute('src', 'img/' + srcImageToOpen);

    // insertion de l'image dans l'overlay
    overlay.prepend(imageToOpen);


    // Création de la croix
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = 'X';

    // Ajout de la croix dans l'overlay

    overlay.append(closeButton);


    // Ajout d'un écouteur d'événement pour la croix afin de quitter l'overlay
    closeButton.addEventListener('click', function() {
        removeImage(overlay);
    });

    // Utilisation du bouton echap pour quitter l'overlay
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {

            removeImage(overlay);
        }
    });
}

// Fonction pour fermer l'image
function removeImage(overlay) {
    if (overlay) {
        overlay.remove();
    }
}

