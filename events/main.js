console.log("hello");

let monHeader = document.getElementById("my-heading");
let mesListItems = document.getElementsByClassName("list-group-items");

let monHeader2 = document.querySelector("#my-heading");
let mesListItems2 = document.querySelectorAll(".list-group-items");

let maDiv = document.querySelector("div");
monHeader.textContent = "Mon nouveau site web"
console.log(maDiv);

console.log(monHeader);
console.log(monHeader2);
console.log(monHeader.textContent);
console.log(monHeader2.textContent);
console.log(mesListItems);
console.log(mesListItems2);
console.log(maDiv);
console.log(monHeader);
console.clear();

let myButton = document.querySelector("#my_Button");

myButton.addEventListener('click', () => {
    //console.log(document.querySelector("#my_Input"));
    //console.log(document.querySelector("#my_Input").textContent)
    console.log(document.querySelector("#my_Input").value);
});
console.clear();

document.querySelector("#my-heading").style.backgroundColor = "yellow";
document.querySelector("body").style.cssText = `background-color: rgba(0, 119, 255, 0.815);
color: brown;`

const closeButton = document.querySelector("#close_btn");
const openButton = document.querySelector("#open_btn");
const myWindow = document.querySelector('#my_window');

closeButton.addEventListener('click', () => {
    myWindow.classList.add('hidden');
});

openButton.addEventListener('click', () => {
    myWindow.classList.remove('hidden');
});


document.addEventListener('keydown', () => {
    console.log("une touche a été pressée!keydown");
})

document.addEventListener('keypress', () => {
    console.log("une touche a été pressée!keypress");
})

document.addEventListener('keyup', () => {
    console.log("une touche a été pressée!keyup");
})

document.addEventListener('keydown', (event) => {
   if (event.key === "Escape") {
   document.querySelector('#my_window').classList.add("hidden");
    }
});