'use strict';
const animal = require("./animal");
let carnDiv = document.getElementById("carnivore");
let herbDiv = document.getElementById("herbivore");

function showCarnivores(carnivores) {
    for (let i=0; i<carnivores.length; i++){
        console.log(carnivores[i]);
        carnDiv.innerHTML += `<p>${carnivores[i]}</p>`;
    }
}

function showHerbivores(herbivores) { 
    for (let i = 0; i <herbivores.length; i++) {
        console.log(herbivores[i]);
        herbDiv.innerHTML += `<p>${herbivores[i]}</p>`;
    }
}

animal.loadCarnivores(showCarnivores); 
animal.loadHerbivores(showHerbivores);