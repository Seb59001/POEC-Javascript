
let animal = {
    type: "chien",
    provenance: "Etats-Unis",
    caractere: "calme",
    age: 2,

    manger: function() {
        alert(this.type + " est en train de manger !");
    },

    boire: function() {
        alert(this.type + " est en train de boire !");
    }
};

alert("Il s'agit d'un " + animal.type + " originaire du " + animal.provenance + ". Il a un caractère plutôt " + animal.caractere + " et il a " + animal.age + " ans.");

animal.manger();