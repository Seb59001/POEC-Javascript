

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

// // Sélectionne tous les onglets pour y rattacher un écouteur d'évènement
// document.querySelectorAll('div.tab-container .tabs .tab').forEach((tab) => {

//     //Mise en place de l'écouteur sur chaque onglet au clic
//     tab.addEventListener('click', function(){

//         // Selection de l'onglet qui a la class active et lui enlever sa class active
//         document.querySelector('div.tab-container .tabs .tab.active').classList.remove('active');


//         // Ajouter la class active à l'onglet cliqué
//         this.classList.add('active');

//         // Selection de l'onglet qui a la class active et lui enlever sa class active
//         document.querySelector('div.tab-container .views .view.active').classList.remove('active');


//         /*

//             Quand un bouton est cliqué : on récupère son data-open : ("view3" par exemple)

//             On met la classe "active" sur la vue dont l'id est égal au data-open récupéré avant.

//             Ex : je clique sur le bouton 4, on récupère donc son data-open qui vaux "view4", puis ensuite je selectionne la vue dont l'id est "#view4" pour lui donner la classe "active"

//         */

//         //Récupération du dataset de l'onglet cliqué
//         let viewToOpen = this.dataset.open;

//         // Ajout de la class active sur la div de contenu portant un # + le nom de l'id correspondant de ce fait à l'onglet cliqué qui porte le même nom de son data-open
//         document.querySelector('#' + viewToOpen).classList.add('active');

//     });

// });