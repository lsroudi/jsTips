// Object

// Example of object

var Objet = {};
var personne = {
    "Prenom": "pierre",
    "Nom": "dupont"
};

var deuxieme_forme_personne = {
    Prenom: "pierre", // Allowed if Prenom is not a reserved word
    "Nom": "dupont"
};


var vald_personne = {
    Prenom: "Marie",
    "Nom-de-jeune-fille": "elize" // valid
};

//alert (valid_personne["Nom-de-jeune-fille"]);

var another_valid_personne = {
    Prenom: "Marie",
    Nom_de_jeune_fille: "nel" // valid
};

//alert (another_valid_personne["Nom_de_jeune_fille"]);

//var invalid_valid_personne = {
//    Prenom: "Marie", 
//    Nom-de-jeune-fille: "elize" // not valid
//};

//nested object
var Vol = {
    numero: 102,
    Arrivee: {
        time: "2013-12-16 19:59",
        ville: "Casablanca"
    },
    Depart: {
        time: "2013-12-16 18:01",
        ville: "Toulouse"
    }
};

//alert(Vol.Arrivee.ville);         //valid
//alert(Vol["Arrivee"]["time"]);    //valid


// undefined value
// undefined value is produced if we try to retrieve a nonexistent property

//alert(Vol.compagnie);    //undefined

// assign a default value if undefined is produced

var compagnie = Vol["compagnie"] || "AirMaroc";
//alert(compagnie); //AirMaroc

//alert(Vol.compagnie.CA);                    //Exception TypeError
//alert(Vol.compagnie && Vol.compagnie.CA);   //undefined

// update value

console.log(personne.Prenom); // pierre

personne.Prenom = "Paul";

console.log(personne.Prenom); // Paul

personne.status = "Célibataire";

console.log(personne.status);

//Reference
//Objects are passed by reference. are never copied:
var x = {}, y = {};
// x, y refer to a different empty object
var x = y = {};
// x, y refer to the same empty object


