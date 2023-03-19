const inquirer = require("inquirer");
const Trainer = require("../classes/Trainer");
const {
    char,
    squirt,
    bulb,
    flare,
    vape,
    leaf,
    eevee,
    blue,
} = require("../classes/Pokedex");
const Battle = require("../classes/Battle");

const availablePokemon = {
    Charmander: char,
    Squirtle: squirt,
    Bulbasaur: bulb,
    Flareon: flare,
    Vaporeon: vape,
    Leafeon: leaf,
    Eevee: eevee,
};
const playerOne = new Trainer();

function choosePokemon(inputPoke) {
    for (poke in availablePokemon) {
        if (poke === inputPoke) {
            playerOne.catch(availablePokemon[poke]);
        }
    }
}

function fight(playerOne, blue) {
    const battle = new Battle();
}
const firstMessages = [
    {
        message: "Ok, player One, what is your name?",
        type: "input",
        name: "name",
    },
    {
        type: "list",
        name: "pokemon",
        message: "Which pokemon do you choose?",
        choices: [
            "Charmander",
            "Squirtle",
            "Bulbasaur",
            "Flareon",
            "Vaporeon",
            "Leafeon",
            "Eevee",
        ],
    },
];

const secondMessages = [];

console.log(
    `Welcome to my Pokemon battle simulator - The Dapper Nerd \n -------`
);

function playGame() {
    inquirer.prompt(firstMessages).then((answers) => {
        //console.log(answers);
        playerOne.name = answers.name;
        choosePokemon(answers.pokemon);
        console.log(`Welcome! ${answers.name}, you chose ${answers.pokemon}!`);
    });
}

playGame();
