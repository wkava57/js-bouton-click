
let bouton = document.createElement('button');
// création de la balise bouton

bouton.id = "bouton";
// on ajoute l'élément bouton ayant pour ID bouton

bouton.textContent = "bouton";

// document.getElementById("action").appendChild(bouton);

document.body.appendChild(bouton);
// attribuer bouton au body avec appendChild




bouton.addEventListener("click",function(){
    // addEventListener (à l'écoute de bouton en un click demander une fonction)
    //(1) document.body.style.backgroundColor = "black";
    //(2) document.body.style.color = "white";
// creer en CSS 1 et 2 et les enlever en js pour éviter un conflit en lui désignant une div ici "interrupteur"
// possibilité de créer une classe en css sans qu'il soit nommé en html.
    document.body.classList.toggle("interrupteur");
});

let h1 = document.createElement('h1');
h1.textContent = "Je change de style";
document.body.appendChild(h1);

