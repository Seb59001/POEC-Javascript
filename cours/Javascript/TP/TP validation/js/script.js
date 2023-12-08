
// Overlay


// Sélection de toutes les images, pour chaque image on crée un écouteur d'événement au clic, qui appelle la fonction displayImage().

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


    // Quitter l'overlay en cliquant en dehors de l'image
    overlay.addEventListener('click', function(event) {
            removeImage(overlay);
    });


}

// Fonction pour fermer l'image
function removeImage(overlay) {
    if (overlay) {
        overlay.remove();
    }
}




// Formulaire

let inputMail = document.querySelector('#input-newsletter');

let inputSubmit = document.querySelector('#input-submit');

let inputGroup = document.querySelector('.div-input-newsletter')

let form = document.querySelector('form');

// Création d'une span vide contenant le futur message d'erreur
let errorMessage = document.createElement('span');

// Création d'une span vide contenant le futur message de succès
let successMessage = document.createElement('span');

// Ecouteur d'événements sur le bouton submit


// Ecouteur d'événement à la soumission du formulaire, afinn d'afficher un message d'erreur ou de succès, selon si l'email inscrit a plus ou moins de 10 caractères
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let mail = inputMail.value;

// Message d'erreur si l'utilisateur entre moins de 10 caractères
    if (mail.length < 10) {
        errorMessage.classList.toggle('error-message');
        errorMessage.innerText = "Le champ doit contenir au moins 10 caractères";
        errorMessage.style.color = "red";
        inputGroup.append(errorMessage);

        // Message de succès si l'adresse mail est valide

    } else if (mail.length >= 10){
        inputMail.remove();
        inputSubmit.remove();
        errorMessage.remove();
        successMessage.classList.toggle('success-message');
        successMessage.style.display = "inline-block";
        successMessage.innerText = "Vous avez bien été inscrit à la newsletter !";
        inputGroup.append(successMessage);
    }
});




