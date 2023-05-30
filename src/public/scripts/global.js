// const { text } = require("@fortawesome/fontawesome-svg-core");

document.documentElement.classList.add('js-enabled')

var socket = io()

socket.on('check-in', (changes) => console.log(changes));

const nav = document.querySelector("nav");
const navContainer = document.querySelector("#nav-id-container");
const menuBtn = document.querySelector("#menu");
const ul = document.querySelector("ul");

navContainer.classList.add("nav-js-style");
nav.classList.add("nav-design");
ul.classList.add("ul-js");

menuBtn.hidden = false;
menuBtn.addEventListener("click", () => {
    navContainer.classList.toggle("nav-active");
});

window.addEventListener(`load`, () =>{
    const year = document.getElementById(`currentYear`);
    let date = new Date();
    year.innerHTML = date.getFullYear();
});
