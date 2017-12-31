'use strict';
let carnivores = [];
let herbivores = [];


const loadCarnivores = function (callbackToInvoke) {
        const loader = new XMLHttpRequest();
        loader.open('GET', "carnivores.JSON");
        loader.send();
        loader.addEventListener("load", function () {
                carnivores = JSON.parse(event.target.responseText).carnivores;
                callbackToInvoke(carnivores);
        });
};

const loadHerbivores = function (callbackToInvoke) {
        const loader = new XMLHttpRequest();
        loader.open('GET', "herbivores.JSON");
        loader.send();
        loader.addEventListener("load", function () {
                herbivores = JSON.parse(event.target.responseText).herbivores;
                callbackToInvoke(herbivores);
        });
};


module.exports = { loadCarnivores, loadHerbivores };