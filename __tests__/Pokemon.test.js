const Pokemon = require("../classes/Pokemon");

describe("Pokemon Class", () => {
    test("Pokemon class has name, type, hitpoints, attack damage and move properties", () => {
        const testPokemon = new Pokemon();
        expect(testPokemon).toHaveProperty("name");
        expect(testPokemon).toHaveProperty("type");
        expect(testPokemon).toHaveProperty("hitPoints");
        expect(testPokemon).toHaveProperty("atkDmg");
    });
    test("Pokemon class stores properties correctly when passed as arguments", () => {
        const newPoke = new Pokemon("steve", 12, 5, "rush");
        expect(newPoke.name).toBe("steve");
        expect(newPoke.hitPoints).toBe(12);
        expect(newPoke.atkDmg).toBe(5);
        expect(newPoke.move).toBe("rush");
    });
    test("Pokemon isEffectiveAgainst method returns false for normal pokemon", () => {
        const testPoke = new Pokemon();
        expect(testPoke.isEffectiveAgainst()).toBe(false);
    });
    test("Pokemon isWeakTo method returns false for normal pokemon", () => {
        const poke = new Pokemon();
        expect(poke.isWeakTo()).toBe(false);
    });
    test("Pokemons hit points are reduced with takeDamage method", () => {
        const newPoke = new Pokemon("Jersey", 12, 4, "bork");
        console.log(newPoke);
        newPoke.takeDamage(5);
        expect(newPoke.hitPoints).toBe(7);
    });
    test("Pokemon useMove returns correct attack damage", () => {
        const newPoke = new Pokemon("abc", 12, 5, "rush");
        expect(newPoke.useMove()).toBe(5);
    });
    test("useMove logs the correct message", () => {
        const pokemon = new Pokemon("Pikachu", 10, 20, "Thunderbolt");
        const spy = jest.spyOn(console, "log").mockImplementation(() => {});

        pokemon.useMove();

        expect(spy).toHaveBeenCalledWith("Pikachu used Thunderbolt!");

        spy.mockRestore();
    });
    test("The hasFainted method returns false if Pokemon has more than 0 hitPoints", () => {
        const poke = new Pokemon("Jersey", 12, 5, "bork");
        expect(poke.hasFainted()).toBe(false);
    });
    test("The hasFainted method returns true if a Pokemon has 0 or lower hitpoints", () => {
        const poke = new Pokemon("Deed", 0, 5, "roll over");
        expect(poke.hasFainted()).toBe(true);
    });
});
