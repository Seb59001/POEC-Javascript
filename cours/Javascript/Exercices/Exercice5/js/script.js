let nb = parseInt(prompt("Entrez un nombre compris entre 1 et 3"));

while (nb < 1 || nb > 3) {
    alert("Veuillez saisir un nombre entre 1 et 3. Réessayez.");
    nb = parseInt(prompt("Entrez un nombre compris entre 1 et 3"));
}

alert("Bravo, vous avez gagné !");


