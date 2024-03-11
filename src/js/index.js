"use strict";

//import { Loader } from "@googlemaps/js-api-loader"
//const {Place} =  google.maps.importLibrary("places");
  

/*
let image = document.getElementsByTagName('img')[0];

document.getElementById('mainstart1')[0].onmouseover = function() {
    image.src = '/src/css/background/background-rosa.jpg';
}*/

//elements
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//event listener
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);


//TA FRAM MENYN
function toggleMenu() {
  let navMenuEl = document.getElementById("nav-menu");

  let style = window.getComputedStyle(navMenuEl);

  if (style.display === "none") {
    navMenuEl.style.display = "block";
  } else {
    navMenuEl.style.display = "none";
  }
}

//----------------------------------------------------------------












