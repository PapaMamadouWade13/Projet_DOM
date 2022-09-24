// Créer une fonction qui permet de récupérer le prix, le nom et l'image d'un produit
function ajouterProduit(noeud) {
    let prix = noeud.parentElement.children[1].innerText
    parseInt(prix)
    let nomProduit = noeud.parentElement.children[0].innerText
    let imageProduit = noeud.parentElement.parentElement.children[0].src

    // Gestion des quantités

    var quantites = document.getElementsByClassName('quantite')
    console.log("quantites", quantites)
    var totalProduit = 0
    for (let i of quantites) {
        totalProduit = i * prix
        console.log(totalProduit)
    }




    // Créer un élément HTML où seront stockées les variables créées plus haut
    var rowElement = document.createElement('tr')  // Créer une nouvelle balise de type tr

    rowElement.innerHTML = `<td><span class="cart-item cart-name cart-header">${nomProduit}</span></td>
    <td><span class="cart-item  cart-column"><img src="${imageProduit}" style="width:40px; height:40px;"></span></td>
    <td><span class="cart-item  cart-column"><span>${prix}</span></td>
    <td><span class="cart-item  cart-column"><span><input type='number' class=" quantite"></input></span></td>
    <td><span class="cart-item  cart-column"><span>${totalProduit}</span></td>
    <td><span><button class="bouton-remove">REMOVE</button></span></td>
    <td><span><button class= "like">LIKE</button></span></td>
    
    `

    // Ajouter ce contenu à la variable rowElement
    var tableau = document.getElementsByClassName('mon_tableau')[0] // Récupérer le tableau
    /*var toto = document.querySelectorAll('.cart-name')
    for (let i = 0; i<= toto.length; i++){
        console.log(toto[i])

    }*/


    var tBody = tableau.getElementsByTagName('tbody')[0] // Récupérer le corps du tableau
    console.log(tBody)

    //tBody.appendChild(rowElement) // Ajouter le contenu de row element en tant que dernier enfant du tableau

    // Création du bouton remove
    var bouton_suppr = document.querySelectorAll('.bouton-remove')
    for (let i of bouton_suppr) {
        i.addEventListener('click', function () {
            rowElement.remove(i)
        })
    }

    // Création du bouton like 
    var like = document.querySelectorAll('.like')
    for (let j of like) {
        j.addEventListener('click', function () {
            j.classList.toggle('changeToRed')


        })

    }

    // Eviter la répétition d'un produit
    var liste = document.querySelectorAll('.cart-name')
    var ok = 0
    for (var i in liste) {
        if (liste[i].innerHTML === nomProduit) {
            console.log('liste[i].innerHTML', liste[i].innerHTML);
            console.log('nomProduit', nomProduit);
            ok = 1
        }
    }

    console.log(ok)
    if (ok !== 1) {
        tBody.appendChild(rowElement)
    }
    else {
        alert("CE PRODUIT EST DEJA DANS LE PANIER")
    }








}
