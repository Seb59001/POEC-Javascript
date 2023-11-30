
// Syntaxe variable
let myVar = 9;
let Myvar = 'bonjour';


// commentaire sur une ligne

/*

commentaire
sur
plusieurs
lignes

*/

// Fonctions natives dans Javascript
// alert('bonjour !');

// console.log('Ce message sera affiché dans la console du navigateur');

let userInput = prompt('Quel est votre prénom ?');

// confirm('êtes vous sûr de vouloir un chat d\'appartement?');


// Variables

let typeNumber = 35; // type number

let typeString = 'Ceci est un type \' string'; // type string
let typeString02 = "Ceci est un type string"; // type string
let typeString03 = `Ceci est un type string`; // type string

let typeBooleanTrue = true;
let typeBooleanFalse = false;

// type undefined

let typeSansTypeEtSansValeur = null;

// type object

console.log(typeof typeNumber);

// Opérateur arithmétiques

let number = 5;

// Addition
console.log(number + 5);

// Soustraction
console.log(number - 5);

// Multiplication
console.log(number * 5);

// Division
console.log(number / 5);

// Modulo (reste de la division)
console.log(number % 5);

// Priorités de calculs
console.log((number + 7) * 2);


// Concaténation

let nameUser01 = 'Alice';

alert('Bonjour ' + nameUser01 + ' !');
alert(`Bonjour ${nameUser01} !`);
