//Light & dark mode
let darkMode = document.querySelector(".dark_mode");
let content = document.querySelector(".content");
let lightMode = document.querySelector(".light_mode");
let section = document.querySelector("section");

darkMode.addEventListener("click", (_e) => {
  darkMode.style.display = "none";
  lightMode.style.display = "inherit";
  document.querySelector("nav").style.backgroundColor = "#F1F3F4";
  document.body.style.backgroundColor = "#151515";
  section.style.color = "#fff";
  section.style.backgroundColor = "#151515";
  content.style.backgroundColor = "#151515";
  content.style.color = "#fff";
  document.querySelector("footer").style.color = "#000000";
  document.querySelector("footer").style.backgroundColor = "#F1F3F4";
  document.body.style.transition = "background-color 0.5s ease-in-out";
  document.querySelector("hr").style.backgroundColor =
    "linear-gradient(to right, transparent, rgb(255 255 255 / 50%), transparent)";
});

lightMode.addEventListener("click", (_e) => {
  lightMode.style.display = "none";
  darkMode.style.display = "inherit";
  document.querySelector("nav").style.backgroundColor = "#F1F3F4";
  document.body.style.backgroundColor = "#F1F3F4";
  section.style.backgroundColor = "#FFFFFF";
  section.style.color = "#000000";
  content.style.backgroundColor = "#FFFFFF";
  content.style.color = "#000000";
  document.querySelector("footer").style.backgroundColor = "#F1F3F4";
  document.querySelector("footer").style.color = "#000000";
  document.body.style.transition = "background-color 0.5s ease-in-out";
  document.querySelector("hr").style.backgroundColor =
    "linear-gradient(to right, transparent, rgb(0 0 0 / 50%), transparent)";
});

//Afficher le nom de l'utilisateur
document.getElementById("username").innerHTML = "Jensone";

//Afficher la date du jour
const day = new Date();
let date = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
document.getElementById("day").innerHTML = day.toLocaleDateString("fr-FR");
