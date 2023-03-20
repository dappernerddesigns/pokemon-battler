const Trainer = require("../classes/Trainer");
const { char, squirt, bulb, flare, vape, leaf } = require("../classes/Pokedex");
const Battle = require("../classes/Battle");

const red = new Trainer("Red");
red.catch(char);
const blue = new Trainer("Blue");
blue.catch(squirt);
const battle = new Battle(red, blue);

describe("Battle class", () => {
    describe("Battle properties", () => {
        test("Battle stores player one and player two", () => {
            expect(battle.playerOne).toEqual(red);
        });
        test("Battle shows which players turn it is", () => {
            console.log(battle);
            expect(battle.attacker).toEqual(red);
            expect(battle.defender).toEqual(blue);
        });
    });
    describe("Fight method", () => {
        test("First turn, defending pokemon takes damage", () => {
            battle.fight(
                battle.attacker.getPokemon("Charmander"),
                battle.defender.getPokemon("Squirtle")
            );
            expect(blue.getPokemon("Squirtle").hitPoints).toBe(35);
        });
        test("Turn changes, attacker should now be player two", () => {
            expect(battle.attacker.name).toBe("Blue");
        });
        test("Effective moves do 25% more damage", () => {
            battle.fight(
                battle.attacker.getPokemon("Squirtle"),
                battle.defender.getPokemon("Charmander")
            );
            expect(red.getPokemon("Charmander").hitPoints).toBe(31.5);
        });
        test("Defender that is strong against attacking type take 0.75% damage", () => {
            battle.fight(
                battle.attacker.getPokemon("Charmander"),
                battle.defender.getPokemon("Squirtle")
            );
            expect(blue.getPokemon("Squirtle").hitPoints).toBe(26);
        });
        test("When a pokemon faints the fight ends", () => {
            console.log(red.pokebelt, blue.pokebelt);

            battle.fight(
                battle.attacker.getPokemon("Squirtle"),
                battle.defender.getPokemon("Charmander")
            );
            battle.fight(
                battle.attacker.getPokemon("Charmander"),
                battle.defender.getPokemon("Squirtle")
            );
            battle.fight(
                battle.attacker.getPokemon("Squirtle"),
                battle.defender.getPokemon("Charmander")
            );
            battle.fight(
                battle.attacker.getPokemon("Charmander"),
                battle.defender.getPokemon("Squirtle")
            );

            expect(
                battle.fight(
                    battle.attacker.getPokemon("Squirtle"),
                    battle.defender.getPokemon("Charmander")
                )
            ).toBe(
                `Oh no! Charmander has fainted and can't continue. Squirtle wins this round!`
            );

            console.log(red.pokebelt, blue.pokebelt);
        });
    });
});
