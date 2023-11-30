const email = "legseb@test.com";
const password = "mdp";

let myEmail;
let myPassword;

do {
    myEmail = prompt("Veuillez saisir votre adresse email");
    myPassword = prompt("Veuillez saisir également votre mot de passe");

    if (myEmail !== email || myPassword !== password) {
        alert("Identifiants incorrects, veuillez réessayer");
    }
} while (myEmail !== email || myPassword !== password);

alert("Bienvenue dans votre espace client !");