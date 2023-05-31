document.documentElement.classList.add("js-enabled");

var socket = io();

socket.on("check-in", (changes) => console.log(changes));

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

window.addEventListener(`load`, () => {
  const year = document.getElementById(`currentYear`);
  let date = new Date();
  year.innerHTML = date.getFullYear();
});

if ("showModal" in document.createElement("dialog")) {
  const showDialog = document.getElementById("new-card-button");
  const newProject = document.getElementById("new-project");
  const newCard = document.getElementById("new-checklist");
  const closeBtn = document.getElementById("close");
  const newDialog = document.createElement("dialog");
  const newChecklistContainer = document.querySelector(".new-checklist-container");
  const newChecklistForm = document.querySelector(".new-checklist-form");

  newDialog.className = "new-card-dialog";
  newDialog.append(newCard);
  document.body.append(newDialog);

  newProject.addEventListener("click", (event) => {
    newDialog.showModal();
    event.preventDefault();
  });

  showDialog.addEventListener("click", (event) => {
    newDialog.showModal();
    event.preventDefault();
  });

  newChecklistContainer.classList.add("new-checklist-container--js");
  newChecklistForm.classList.add("new-checklist-form--js");

  closeBtn.hidden = false;
  closeBtn.addEventListener("click", () => {
    newDialog.close();
  });
};
