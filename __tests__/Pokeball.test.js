const Pokeball = require("../classes/Pokeball");
const { char, squirt, bulb } = require("../classes/Pokedex");

describe("Pokeball", () => {
    describe("Pokeball property", () => {
        test("Pokeball has a stored property that returns an empty object if no pokemon is stored", () => {
            const ball = new Pokeball();
            expect(ball.stored).toEqual({});
        });
    });
    describe("Throw method", () => {
        test("Pokeball has a throw method that if stored is empty will store the pokemon passed as an argument", () => {
            const ball = new Pokeball();
            ball.throw(char);
            expect(ball.stored).toEqual(char);
        });
        test("throw method logs the correct message", () => {
            const ball = new Pokeball();
            const spy = jest.spyOn(console, "log").mockImplementation(() => {});

            ball.throw(char);

            expect(spy).toHaveBeenCalledWith("You caught Charmander!");

            spy.mockRestore();
        });
        test("If pokeball isn't empty and throw is passed another pokemon, stored pokemon does not change", () => {
            const ball = new Pokeball();
            ball.throw(squirt);
            ball.throw(char);
            expect(ball.stored).toEqual(squirt);
        });
        test("If throw method is invoked with no argument and a pokemon is stored, the stored pokemon is returned", () => {
            const ball = new Pokeball();
            ball.throw(squirt);
            expect(ball.throw()).toEqual(squirt);
        });
        test("throw method with a stored pokemon logs the correct message", () => {
            const ball = new Pokeball();
            ball.throw(bulb);
            const spy = jest.spyOn(console, "log").mockImplementation(() => {});

            ball.throw();

            expect(spy).toHaveBeenCalledWith("GO Bulbasaur!");

            spy.mockRestore();
        });
        test("throw method without a stored pokemon logs the correct message", () => {
            const ball = new Pokeball();
            const spy = jest.spyOn(console, "log").mockImplementation(() => {});

            ball.throw();

            expect(spy).toHaveBeenCalledWith("This ball is empty");

            spy.mockRestore();
        });
    });
    describe("isEmpty method", () => {
        test("isEmpty method returns true if no stored Pokemon", () => {
            const ball = new Pokeball();
            expect(ball.isEmpty()).toBe(true);
        });
        test("isEmpty method returns false if there is a stored pokemon", () => {
            const ball = new Pokeball();
            ball.throw(char);
            expect(ball.isEmpty()).toBe(false);
        });
    });
    describe("contains method", () => {
        test("If no pokemon is stored, returns a string of `empty`", () => {
            const ball = new Pokeball();
            expect(ball.contains()).toBe("empty");
        });
        test("returns the name of a stored pokemon", () => {
            const ball = new Pokeball();
            ball.throw(char);
            expect(ball.contains()).toBe("Charmander");
        });
    });
});
