const Trainer = require("../classes/Trainer");
const { char, squirt, bulb } = require("../classes/Pokedex");
const Pokeball = require("../classes/Pokeball");

const red = new Trainer("Red");
const ball = new Pokeball();

describe("Trainer", () => {
    describe("Trainer properties", () => {
        test("Trainer has a belt property", () => {
            expect(red).toHaveProperty("pokebelt");
        });
        test("Pokebelt contains six pokeballs", () => {
            expect(red.pokebelt.length).toBe(6);
            expect(red.pokebelt[0]).toEqual(ball);
        });
        test("Trainer has a name property", () => {
            expect(red.name).toBe("Red");
        });
    });
    describe("Catch method", () => {
        test("If a pokeball is empty, uses first empty ball to catch a pokemon", () => {
            red.catch(char);
            expect(red.pokebelt[0].stored).toEqual(char);
        });
        test("With a few stored pokemon, catch method finds the next empty slot", () => {
            red.catch(squirt);
            red.catch(bulb);
            expect(red.pokebelt[0].stored).toEqual(char);
            expect(red.pokebelt[1].stored).toEqual(squirt);
            expect(red.pokebelt[2].stored).toEqual(bulb);
        });
        test("If there are no empty slots, returns a string telling the user", () => {
            red.catch(bulb);
            red.catch(bulb);
            red.catch(bulb);
            expect(red.catch(char)).toBe("No empty balls available!");
        });
    });
    describe("getPokemon method", () => {
        test("When passed a pokemon name, returns the first pokemon matching that name", () => {
            expect(red.getPokemon("Squirtle")).toEqual(squirt);
            expect(red.getPokemon("Bulbasaur")).toEqual(bulb);
        });
        test("If no matching pokemon found, returns a message to the user", () => {
            expect(red.getPokemon("Flareon")).toBe(
                "No pokemon with that name in belt"
            );
        });
    });
});
