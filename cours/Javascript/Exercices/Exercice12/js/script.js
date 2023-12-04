
/* Exercice 12 : Plein de titres en rouge !


    - Chaque titre cliqué doit changer en couleur rouge.

    Bonus : si on reclique sur un titre, il revient en noir !
*/


let elements = document.querySelectorAll('h2');

elements.forEach((element) => {
    element.addEventListener('click', function() {

        if (element.classList.contains('red')) {

            element.classList.remove('red');
        } else {

            element.classList.add('red');
        }
    });
});