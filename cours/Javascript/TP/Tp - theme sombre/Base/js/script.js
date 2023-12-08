

// fonction qui permet de mettre en place ou supprimer la classe qui changera le thème de couleur de notre page



// Fonction qui permet de mettre en place ou supprimer la classe qui changera le thème de couleur de notre page
function theme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (theme === 'light') {
        document.body.classList.remove('dark-theme');
    }
}

// Écouteur d'évènement pour attendre le chargement complet du DOM
document.addEventListener('DOMContentLoaded', function(){
    // Écoute des deux boutons au clic
    let lightBtn = document.querySelector('#theme-light');
    let darkBtn = document.querySelector('#theme-dark');

    darkBtn.addEventListener('click', function() {
        theme('dark');
    });

    lightBtn.addEventListener('click', function() {
        theme('light');
    });
});
