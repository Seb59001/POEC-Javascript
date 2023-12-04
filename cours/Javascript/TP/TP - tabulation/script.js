

/*
Dans la démo on peut voir que suivant le titre d'onglet que l'on va cliquer on aura un contenu correspondant, dans le squelette html nous avons des datasets sur les onglets et des id sur les contenus dont il faudra se servir pour pouvoir lié le bon nom d'onglet au bon contenu.

L'onglet cliqué change de couleur au clic en ayant la classe active rajouté dessus.
La div contenant du contenu apparaît quand on met la class active dessus également.
*/

tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        // Désactive toutes les autres classes 'active' sur les onglets
        tabs.forEach((otherTab) => {
            if (otherTab !== tab) {
                otherTab.classList.remove('active');
            }
        });

        // Bascule la classe 'active' sur l'onglet actuel
        tab.classList.toggle('active');

        // Obtient l'ID de la vue correspondante à partir de l'attribut data-open
        var viewId = tab.getAttribute('data-open');

        // Désactive toutes les autres classes 'active' sur les vues
        var views = document.querySelectorAll('.view');
        views.forEach((view) => {
            if (view.id !== viewId) {
                view.classList.remove('active');
            }
        });

        // Bascule la classe 'active' sur la vue correspondante
        var activeView = document.getElementById(viewId);
        if (activeView) {
            activeView.classList.toggle('active');
        }
    });
});