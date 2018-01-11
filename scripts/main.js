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
