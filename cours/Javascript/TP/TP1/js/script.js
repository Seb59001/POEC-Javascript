// Demander à l'utilisateur s'il souhaite démarrer une nouvelle partie
let confirmation = confirm("Souhaitez-vous démarrer une nouvelle partie ?");

if (confirmation) {
    // Générer un nombre aléatoire entre 1 et 100 inclus
    nbAleatoire = Math.round(Math.random() * 100) + 1;

    // Initialiser le compteur d'essais à 0
    let essai = 0;

    // Boucle do-while pour le jeu du cherche nombre
    do {
        // Demander à l'utilisateur de saisir un nombre
        nb = parseInt(prompt('Veuillez entrer un nombre entre 1 et 100 (' + essai + ' / 10)'));

        // Vérifier si la réponse est invalide
        if (isNaN(nb) || nb < 1 || nb > 100) {
            alert("Réponse invalide !");
            continue; // Ignorer cet essai et revenir au début de la boucle
        } else if (essai === 10) {
            // Si les 10 essais sont dépassés, afficher un message d'échec, la partie est perdue
            alert("ECHEC : le nombre à trouver était " + nbAleatoire + " !");
            break; // Sortir de la boucle
        }

        // Incrémenter le nombre d'essais à chaque réponse invalide
        essai++;

        // Comparer le nombre saisi avec le nombre aléatoire
        if (nb < nbAleatoire) {
            alert("Le nombre à trouver est plus grand que " + nb);
        } else if (nb > nbAleatoire) {
            alert("Le nombre à trouver est plus petit que " + nb);
        } else if (nb == nbAleatoire) {
            // Si le nombre est trouvé, afficher un message de succès avec le score
            alert("Bravo le nombre est bien " + nbAleatoire + " ! Vous l'avez trouvé en " + essai + " essai(s). Vous gagnez " + (11 - essai) * 10 + " points");
        }
    } while (nb < nbAleatoire || nb > nbAleatoire);
} else if (!confirmation) {
    // Si l'utilisateur annule, afficher un message d'annulation
    alert("Partie annulée !");
}