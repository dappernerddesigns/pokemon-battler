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
let playerPokemon = "";
let bluePokemon = "";
function choosePokemon(inputPoke) {
    for (poke in availablePokemon) {
        if (poke === inputPoke) {
            playerOne.catch(availablePokemon[poke]);
        }
    }
}

function fight(playerOne, blue, p1Poke, bPoke) {
    const battle = new Battle(playerOne, blue);
    playerPokemon = p1Poke;
    bluePokemon = bPoke;
    return { battle, playerPokemon, bluePokemon };
}
const firstMessages = [
    {
        message: "Ok, player One, what is your name?",
        type: "input",
        name: "name",
    },
    {
        type: "checkbox",
        name: "pokemonSelection",
        message: "Choose up to six Pokemon to battle:",
        choices: [
            "Charmander",
            "Squirtle",
            "Bulbasaur",
            "Flareon",
            "Vaporeon",
            "Leafeon",
            "Eevee",
        ],
        validate: function (answer) {
            if (answer.length > 6) {
                return "You can only select up to six Pokemon.";
            } else if (answer.length < 1) {
                return "You must choose at least one Pokemon.";
            }
            return true;
        },
    },
];

console.log(
    `Welcome to my Pokemon battle simulator - The Dapper Nerd \n -------`
);

function playGame() {
    inquirer
        .prompt(firstMessages)
        .then((answers) => {
            playerOne.name = answers.name;

            answers.pokemonSelection.forEach((pokemon) => {
                choosePokemon(pokemon);
            });

            blue.catch(char);
            blue.catch(squirt);
            blue.catch(bulb);
            blue.catch(vape);
            let welcomeString = `Welcome! ${answers.name}, you have chosen `;
            answers.pokemonSelection.forEach((pokemon) => {
                welcomeString += `${pokemon}, `;
            });
            welcomeString += `\n\nLet's get ready to battle!!\n`;
            console.log(welcomeString);

            const battlePrompt = {
                type: "list",
                name: "battlePokemon",
                message: "Choose a pokemon to battle with:",
                choices: answers.pokemonSelection,
            };

            return inquirer.prompt(battlePrompt);
        })
        .then((answers) => {
            console.log(
                `Alright! You chose ${answers.battlePokemon}, ${blue.name} chose Charmander!\n\nTime to battle!!\n`
            );
            return fight(playerOne, blue, answers.battlePokemon, "Charmander");
        })
        .then((answers) => {
            playerPoke = playerOne.getPokemon(answers.playerPokemon);
            bluePoke = blue.getPokemon(answers.bluePokemon);
            let atkPoke = playerPoke;
            let defPoke = bluePoke;
            while (playerPoke.hitPoints > 0 && bluePoke.hitPoints > 0) {
                if (answers.battle.attacker === playerOne) {
                    atkPoke = playerPoke;
                    defPoke = bluePoke;
                } else {
                    defPoke = playerPoke;
                    atkPoke = bluePoke;
                }
                answers.battle.fight(atkPoke, defPoke);
            }
            return answers.battle.fight(atkPoke, defPoke);
        })
        .then((stuff) => {
            // stuff contains an object with the winning pokemon, winning trainer and loosing trainer.
        });
}

playGame();
