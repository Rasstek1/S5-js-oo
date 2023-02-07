/*function updateSoustotal(champQuantite, soustotalPoire) {
    let quantite = parseInt(champQuantite.value);
    let prix;
     prixPeches.value = (quantite * prix).toFixed(2);

    if (fruit === 'Peches'){
        prix = 10.00;// peut etre changer dans le html pour un id pour lier les futurs changement
        idPrix = 'prixPeches';
    } 

    //prend l'ancien prix  et l'ajoute au prix pour creer le nouveau prix
    let ancienPrix = document.getElementById(idPrix).innerText;
    let nouveauPrix = +ancienPrix + +prix;
    document.getElementById(idPrix).innerText = nouveauPrix;//getElementById (selector) remplace prixPommes par nouveauprix

  }


 function checkSoustotal() {
    let total = 0;
    let nbFruit = document.querySelectorAll('totalFruit');
    nbFruit.forEach(function(element) {
      total += parseFloat(element.value);
    });
    if (total < 20) {
      alert("Montant minimum 20 $. Veuillez ajouter des articles à votre panier pour atteindre 20 piastres!!!");
    }
}*/




function Ajuster(fruit) {
    let sousTotalPeches = document.getElementById("sousTotalPeches");
    let sousTotalPoires = document.getElementById("sousTotalPoires");
    let sousTotalPommes = document.getElementById("sousTotalPommes");
    switch (fruit) {
        case "Peches":
            sousTotalPeches.innerHTML = parseInt(document.getElementById("prixPeches").innerText) * document.getElementById("nbPeches").value;
            break;
        case "Poires":
            sousTotalPoires.innerHTML = parseInt(document.getElementById("prixPoires").innerText) * document.getElementById("nbPoires").value;
            break;
        case "Pommes":
            sousTotalPommes.innerHTML =  parseInt(document.getElementById("prixPommes").innerText) * document.getElementById("nbPommes").value;
            break;
    }
    document.getElementById("total").innerText  = +sousTotalPeches.innerHTML + +sousTotalPommes.innerHTML + +sousTotalPoires.innerHTML;


}


function Valider(){
    let totalFruits = +document.getElementById("nbPeches").value + +document.getElementById("nbPoires").value + +document.getElementById("nbPommes").value
    document.getElementById("errorMax").classList.add("invisible")
    document.getElementById("errorValeur").classList.add("invisible")

    if(totalFruits>24){

    document.getElementById("errorMax")
        document.getElementById("errorMax").classList.remove("invisible")
        return false;

    }if ( document.getElementById("total").innerText < 20){
        document.getElementById("errorValeur").classList.remove("invisible")
        return false;
    }

    return true;
}





   
  

/*function total() {
    let total = 0;
    let nbFruit = document.querySelectorAll('totalFruit');
    nbFruit.forEach(function(element) {
      total += parseFloat(element.value);
    });
    if (total < 20) {
      alert("Montant minimum 20 $. Veuillez ajouter des articles à votre panier pour atteindre 20 piastres!!!");
    }*/