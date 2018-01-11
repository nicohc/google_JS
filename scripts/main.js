// Exo 1 Warmup

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

// Exo 2 Redirection


var boutonrecherche = document.getElementById("bouton1");

function recherche(larecherche) {
    var larecherche = document.getElementById("elementrecherche").value;
    window.location = "http://www.google.fr/search?q=" + larecherche;
}

bouton1.onclick = function () {
  recherche();
}


// Exo 3 Popup

function popupporn() {
  alert("Hey le site xxxvidsxxx est trop bien !!!\nViens dessus stp please.\nAllez please, Viens , on est trop bien !!!");
}

setTimeout(popupporn, 8000);
