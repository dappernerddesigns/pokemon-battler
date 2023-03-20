const {
    Squirtle,
    Charmander,
    Bulbasaur,
    Flareon,
    Vaporeon,
    Leafeon,
} = require("./Species");
const Pokemon = require("./Pokemon");
const Trainer = require("./Trainer");

const char = new Charmander("Charmander", 44, 12, "Flamethrower");
const flare = new Flareon("Flareon", 65, 19, "Fire blast");
const squirt = new Squirtle("Squirtle", 44, 10, "Surf");
const vape = new Vaporeon("Vaporeon", 70, 20, "Hydro pump");
const bulb = new Bulbasaur("Bulbasaur", 45, 13, "Razor Leaf");
const leaf = new Leafeon("Leafeon", 65, 21, "Giga drain");
const eevee = new Pokemon("Eevee", 55, 12, "Headbutt");

const blue = new Trainer("Blue");

module.exports = { char, squirt, bulb, flare, vape, leaf, eevee, blue };
