// const myButton = document.querySelector('#valider');

// myButton.addEventListener('click', ()=>{
//     let nom = document.querySelector('#nom').value;
//     let prenom = document.querySelector('#prenom').value;
//     const result = document.querySelector('#result');
//     result.textContent += nom+" "+prenom;
// });

const result = document.querySelector('#result');

let message = "", nom, prenom;

Valider = () => {
    nom = document.querySelector('#nom').value;
    prenom = document.querySelector('#prenom').value;
    Afficher();
}

Afficher = () => {
    //result.textContent += `<h3> Vous avez saisi : ${nom} ${prenom} </h3>`
    result.innerHTML += `<h3> Vous avez saisi : ${nom} ${prenom} </h3>`
}




