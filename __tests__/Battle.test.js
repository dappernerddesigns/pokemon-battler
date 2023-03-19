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
            expect(battle.playerTwo).toEqual(blue);
        });
        test("Battle shows which players turn it is", () => {
            console.log(battle);
            expect(battle.attacker).toEqual(red);
        });
    });
    describe("Fight method", () => {
        test("First turn, defending pokemon takes damage", () => {
            battle.fight(
                battle.attacker.getPokemon("Charmander"),
                battle.defender.getPokemon("Squirtle")
            );
            expect(blue.getPokemon("Squirtle").hitPoints).toBe(32);
        });
        test("Turn changes, attacker should now be player two", () => {
            console.log(battle);
            expect(battle.attacker.name).toBe("Blue");
        });
    });
});
