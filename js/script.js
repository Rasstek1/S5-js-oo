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


/************************************************************Sans Objet******************************************************************* */

/*function Ajuster(fruit) {
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


}*/


/*let fruits = {
    peches: {
        prix: 0,
        quantite: 0,
        sousTotal: 0
    },
    poires: {
        prix: 0,
        quantite: 0,
        sousTotal: 0
    },
    pommes: {
        prix: 0,
        quantite: 0,
        sousTotal: 0
    }
   
};


function Ajuster(fruit) {
    switch (fruit) {
        case "Peches":
            fruits.peches.prix = parseInt(document.getElementById("prixPeches").innerText);
            fruits.peches.quantity = document.getElementById("nbPeches").value;
            fruits.peches.sousTotal = fruits.peches.prix * fruits.peches.quantity;
            document.getElementById("sousTotalPeches").innerHTML = fruits.peches.sousTotal;
            CalculerTotal();
            break;

            case "Poires":
                fruits.poires.prix = parseInt(document.getElementById("prixPoires").innerText);
                fruits.poires.quantite = document.getElementById("nbPoires").value;
                fruits.poires.sousTotal = fruits.poires.prix * fruits.poires.quantite;
                document.getElementById("sousTotalPoires").innerHTML = fruits.poires.sousTotal;
                CalculerTotal();
                break;

                case "Pommes":
                    fruits.pommes.prix = parseInt(document.getElementById("prixPommes").innerText);
                    fruits.pommes.quantite = document.getElementById("nbPommes").value;
                    fruits.pommes.sousTotal = fruits.pommes.prix * fruits.pommes.quantite;
                    document.getElementById("sousTotalPommes").innerHTML = fruits.pommes.sousTotal;
                    CalculerTotal();
                    break;
    }
}

/*function CalculerTotal(){

 document.getElementById("total").innerText  = +sousTotalPeches.innerHTML + +sousTotalPommes.innerHTML + +sousTotalPoires.innerHTML
 


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

function Reset(){
    document.getElementById("sousTotalPeches").innerText=0;
    document.getElementById("sousTotalPoires").innerText=0;
    document.getElementById("sousTotalPommes").innerText=0;
    document.getElementById("total").innerText=0;
    document.getElementById("errorValeur").classList.add("invisible")
    document.getElementById("errorMax").classList.add("invisible")
}

addEventListener('reset', ()=> {Reset()})


function afficher(){

    // récupérer les données de l'URL
    let data = location.search.substring(1); //location.search = données de l'URL, on enlève le ? avec substring(1)
    document.write(data);
    let tabDatas = data.split('&');
    let nbPeches = tabDatas[0].split("=")[1];
    document.write(nbPeches)

    // récupérer les données de la session
    let nbPommes = sessionStorage.getItem("nbPommes");
    document.write(nbPommes);

    document.writeln();

    let panier = sessionStorage.getItem("panier");
    document.writeln(panier);


}
*//**********************************************CODE AVEC PL*********************************************************** */

/*function PosterDatat()
{
    document.getElementById("commande").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let formData = new FormData(event.target);
  
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://127.0.0.1:5501/merci.html?", true);
    xhr.send(formData);
  });
 
}

/*function sendData(data) {
    let XHR = new XMLHttpRequest(merci.innerHTML);
    let urlEncodedData = "";
    let urlEncodedDataPairs = [];
    let name;
  
    // Transformez l'objet data en un tableau de paires clé/valeur codées URL.
    for(name in data) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
  
    // Combinez les paires en une seule chaîne de caractères et remplacez tous
    // les espaces codés en % par le caractère'+' ; cela correspond au comportement
    // des soumissions de formulaires de navigateur.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
  
    // Définissez ce qui se passe en cas de succès de soumission de données
    XHR.addEventListener('load', function(event) {
      alert('Ouais ! Données envoyées et réponse chargée.');
    });
  
    // Définissez ce qui arrive en cas d'erreur
    XHR.addEventListener('error', function(event) {
      alert('Oups! Quelque chose s\'est mal passé.');
    });
  
    // Configurez la requête
    XHR.open('POST', 'https://example.com/cors.php');
  
    // Ajoutez l'en-tête HTTP requise pour requêtes POST de données de formulaire
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Finalement, envoyez les données.
    XHR.send(urlEncodedData);
  }

 /*****************************************************CODE MARYSE**************************************************************** */  
  
 class Fruit{
    constructor(nom="", prix=0, quantite=0, sousTotal=0) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
        this.sousTotal = sousTotal;
    }

    toString(){
        return this.quantite + " " + this.nom + " à " + this.prix + " : " + this.sousTotal;
    }
}

class Panier{
    constructor(peches, poires, pommes, total=0) {
        this.peches = peches;
        this.poires = poires;
        this.pommes = pommes;
        this.total = total;
    }

    toString(){
        return this.peches + "<br>" + this.poires + "<br>" + this.pommes + "<br>Total : " + this.total;
    }
}

function initialiser(){
    // J'initialise le panier avec des fruits par défaut pour mettre toutes les valeurs à 0
    // Ça va me servir dans le calcul du total.
    panier = new Panier(new Fruit(), new Fruit(), new Fruit());  // Seul le panier va être global. On l'initialise au chargement de la page.
}

function valider(fruit){
    // Récupérer les variables
    let nbFruit = +document.getElementById("nb"+fruit).value;
    let prix = +document.getElementById("prix"+fruit).innerText;
    let sousTotal = 0;

    // Valider le nombre de fruits
    if (nbFruit < 0 || nbFruit > 24)
    {
        document.getElementById("erreur"+fruit).innerText = "Doit être entre 0 et 24";
        document.getElementById("erreur"+fruit).classList.remove("invisible");
        document.getElementById("submit").setAttribute("disabled", "true");
    }
    // Afficher le sous-total
    else {
        document.getElementById("erreur"+fruit).innerText = "";
        document.getElementById("erreur"+fruit).classList.add("invisible");
        sousTotal = +nbFruit * +prix;
        document.getElementById("sousTotal"+fruit).innerText = sousTotal;
        document.getElementById("submit").removeAttribute("disabled");
    }

    // Créer les objets fruits et les mettre dans le panier
    let nouveauFruit = new Fruit(fruit, prix, nbFruit, sousTotal);
    if (fruit === "Peches"){
        panier.peches = nouveauFruit;
    }
    else  if(fruit === "Poires"){
        panier.poires = nouveauFruit;
    }
    else {
        panier.pommes = nouveauFruit
    }

    // Calculer le total
    panier.total = +panier.peches.sousTotal + +panier.poires.sousTotal + +panier.pommes.sousTotal;
    document.getElementById("total").innerText = panier.total;
}

function envoyer(){

    // Validation
    if (+panier.total < 20){
        document.getElementById("erreurPanier").classList.remove("invisible");
        document.getElementById("erreurPanier").innerText = "La valeur minimale des paniers est de 20$.";
        return false;
    }
    else if (+panier.peches.quantite + +panier.poires.quantite + +panier.pommes.quantite > 24){
        document.getElementById("erreurPanier").classList.remove("invisible");
        document.getElementById("erreurPanier").innerText = "Le nombre total de fruit ne doit pas dépasser 24.";
        return false;
    }
    else {
        document.getElementById("erreurPanier").classList.add("invisible");

        //inscririre les données dans la session
        //sessionStorage.setItem("nbPommes", document.getElementById("nbPommes").value);
        // Créer le panier
        //let monPanier = new Panier(nouveauFruit, 0, 0, nouveauFruit.sousTotal);

        // Inscrire le panier dans la session pour y avoir accès sur la deuxième page.
        sessionStorage.setItem("panier", panier);
        return true;
    }
}