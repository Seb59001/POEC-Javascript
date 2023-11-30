let listePrenoms = [];

function demanderConfirmation() {

    let confirmation = confirm("Souhaitez-vous ajouter un nouveau prénom à la liste ?");

    return confirmation;
}


while (demanderConfirmation()) {
    let nouveauPrenom = prompt("Quel prénom souhaitez-vous ajouter à la liste ?");

    listePrenoms.push(nouveauPrenom);

    console.log("Liste des prénoms : " + listePrenoms);
}

if (listePrenoms.length == 0) {
    console.log("La liste des prénoms est vide.");
} else {
    console.log("Liste de tous les prénoms : " + listePrenoms);
}
