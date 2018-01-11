// Exo 1

var lebouton = document.querySelector('button');
var lecontenu = document.getElementById("elementscentraux");

function affichage() {
    if (lecontenu.style.display === "none") {
        lecontenu.style.display = "block";
        lebouton.style.display = "none";
    }
    else {
        lecontenu.style.display = "none";
    }
}

lebouton.onclick = function() {
  affichage();
}

// Exo 2


var boutonrecherche = document.getElementById("bouton1");

function recherche(larecherche) {
    var larecherche = document.getElementById("elementrecherche").value;
    window.location = "http://www.google.fr/search?q=" + larecherche;
}

bouton1.onclick = function () {
  recherche();
}
