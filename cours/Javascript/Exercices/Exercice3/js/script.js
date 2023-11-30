const email = "legseb@test.com";

const password = "mdp";




let myEmail = prompt("Veuillez saisir votre adresse email")

let myPassword = prompt("Veuillez saisir également votre mot de passe");

if (email == myEmail && password == myPassword) {
    alert("Bienvenue dans votre espace client ! ");
} else {
    alert("Identifiants incorrects, veuillez réessayer");
}