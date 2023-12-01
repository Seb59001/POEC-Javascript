/*
    Exercice 10 :

    1) Sélectionner l'élément ayant la classe ".start" dans le deuxième container

    2) Sélectionner le 4ème "li" du premier container à partir de l'élément ".start", puis l'afficher dans la console.
*/

let test1 = document.querySelector(".start");

let test2 = test1.parentElement.parentElement.parentElement.previousElementSibling.lastElementChild.children[3]

console.log(test2);