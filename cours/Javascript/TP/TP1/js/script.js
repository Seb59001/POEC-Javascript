let confirmation = confirm("Souhaitez vous démarrer une nouvelle partie ?");

if (confirmation) {
    nbAleatoire = Math.round(Math.random() * 100) + 1;

    let essai = 0;

    do {
        nb = parseInt(prompt('Veuillez entrer un nombre entre 1 et 100 (' + essai + ' /10)'));

        if (isNaN(nb) || nb < 1 || nb > 100) {
            alert("Réponse invalide !");
            continue;
        } else if (essai === 10) {
            alert("ECHEC : le nombre à trouver était " + nbAleatoire + " !");
            break;
        }


        essai++;

        if (nb < nbAleatoire) {
            alert("Le nombre à trouver est plus grand que " + nb)
        } else if (nb > nbAleatoire) {
            alert("Le nombre à trouver est plus petit que " + nb)
        } else if (nb == nbAleatoire) {
            alert("Bravo le nombre est bien " + nbAleatoire + " ! vous l'avez trouvé en " + essai + " essai(s). Vous gagnez " + (10 - essai) * 10 + " points")
        }
    } while (nb < nbAleatoire || nb > nbAleatoire)
} else if (!confirmation) {
    alert("Partie annulée !")
}






