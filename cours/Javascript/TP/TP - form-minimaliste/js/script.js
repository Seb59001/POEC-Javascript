

// fonction pour mettre le champ demandé (field) en rouge (classe CSS "field-invalid") et insérer un message d'erreur (errorText) en dessous du champ qui aura la class css "error-text".

// - Vérifier si la valeur récupérée du premier champ est inférieur à 2 ou supérieur à 25, si c’est le cas on appelle la fonction créée précédemment en indiquant en premier paramètre le champ choisi et en second le texte suivant : 'Le prénom doit contenir entre 2 et 25 caractères !’
// - Vérifier si la valeur récupéré du deuxième champ est inférieur à 2 ou supérieur à 25, si c’est le cas on appelle la fonction créée précédemment en indiquant en premier paramètre le champ choisi et en second le texte suivant : ‘Le nom doit contenir entre 2 et 25 car



// Créez une div pour le message d'erreur
let divError = document.createElement('div');

function formError(input, errorMessage) {
    // // Supprimez les messages d'erreur existants
    // let existingErrors = input.parentElement.querySelectorAll('.error-text');
    // existingErrors.forEach(error => error.remove());

    // Ajoutez la classe 'field-invalid' au champ
    input.classList.toggle("field-invalid");

    // Ajoutez la classe 'error-text' à la div
    divError.classList.toggle('error-text');

    // Ajoutez le message d'erreur à la div
    divError.innerText = errorMessage;

    divError.style.color = "red";

    // Insérez la div après le champ demandé
    input.parentElement.insertBefore(divError, input.nextSibling);
}


// Attente du chargement de la page

document.addEventListener('DOMContentLoaded', function () {

    // Sélection du formulaire que nous souhaitons vérifier, nettoyage des erreurs
    let form = document.querySelector('#register-form');

    inputFirstname = document.querySelector('#firstname');

    inputLastname = document.querySelector('#lastname');

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (inputFirstname.value.length < 2 || inputFirstname.value.length > 25) {
            formError(inputFirstname, 'Le prénom doit contenir entre 2 et 25 caractères');
        }
        else if (inputLastname.value.length < 2 || inputLastname.value.length > 25) {
            formError(inputLastname, 'Le nom doit contenir entre 2 et 25 caractères');
        }
    })

});


