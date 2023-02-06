function updateSoustotal(champQuantite, soustotalPoire) {
    let quantite = parseInt(champQuantite.value);
    let prix = parseFloat(soustotalPoire.dataset.prix);
    soustotalPoire.value = (quantite * prix).toFixed(2);
  }


 function checkSubtotal() {
    let total = 0;
    let subtotalElements = document.querySelectorAll('.totalFruit');
    subtotalElements.forEach(function(element) {
      total += parseFloat(element.value);
    });
    if (total < 20) {
      alert("Le montant minimum du panier est de 20 $. Veuillez ajouter des articles à votre panier pour atteindre");
    }
}