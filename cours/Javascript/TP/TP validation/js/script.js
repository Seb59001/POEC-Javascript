document.querySelectorAll('img').forEach((image) => {

    image.addEventListener('click', function(){

        displayImage(image);
    });

});

// Fonction pour faire apparaître l'image au clic de sa miniature

function displayImage(image) {

    // Selection de toutes les images
    let gallery = document.querySelector(".turtles-body-content-images")

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
    
    imageToOpen.setAttribute('src', './images/images-galerie/Miniatures/' + srcImageToOpen);

    // insertion de l'image dans l'overlay
    overlay.prepend(imageToOpen);


    // Utilisation du bouton echap pour quitter l'overlay
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {

            removeImage(overlay);
        }
    });


    overlay.addEventListener('click', function(event) {
        if (!imageToOpen.contains(event.target)) {
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





