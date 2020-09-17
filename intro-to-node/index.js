const superheroes = require("superheroes");
const supervillains = require("supervillains");

let mySuperHero = superheroes.random();
let myVillain = supervillains.random();

console.log(mySuperHero + " fights " + myVillain);
