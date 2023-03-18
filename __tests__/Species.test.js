const { Charmander, Squirtle, Bulbasaur } = require("../classes/Species");
const Pokemon = require("../classes/Pokemon");
const char = new Charmander("Charmander", 44, 12, "Flamethrower");
const squirt = new Squirtle("Squirtle", 44, 10, "Surf");
const bulb = new Bulbasaur("Bulbasaur", 45, 13, "Razor Leaf");
const eevee = new Pokemon("Eevee", 55, 10, "Headbutt");

console.log(char);
console.log(squirt);
console.log(bulb);
console.log(eevee);
describe("Charmander", () => {
    test("Charmander is a fire type with the correct name, hitpoints, attack damage and move", () => {
        expect(char.name).toBe("Charmander");
        expect(char.hitPoints).toBe(44);
        expect(char.atkDmg).toBe(12);
        expect(char.move).toBe("Flamethrower");
        expect(char.type).toBe("fire");
    });
    test("Charmander can take damage", () => {
        const deadChar = new Charmander("Deed", 4, 12, "Rollover");
        deadChar.takeDamage(4);
        expect(deadChar.hitPoints).toBe(0);
        expect(deadChar.hasFainted()).toBe(true);
    });
    test("Charmander can inflict damage", () => {
        expect(char.useMove()).toBe(12);
    });
});

describe("Bulbasaur", () => {
    test("Bulbasaur is a grass type with the correct name, hitpoints, attack damage and move", () => {
        expect(bulb.name).toBe("Bulbasaur");
        expect(bulb.hitPoints).toBe(45);
        expect(bulb.atkDmg).toBe(13);
        expect(bulb.move).toBe("Razor Leaf");
        expect(bulb.type).toBe("grass");
    });
    test("Bulbasaur can take damage", () => {
        const deadbulb = new Bulbasaur("Deed", 4, 12, "Rollover");
        deadbulb.takeDamage(4);
        expect(deadbulb.hitPoints).toBe(0);
        expect(deadbulb.hasFainted()).toBe(true);
    });
    test("Bulbasaur can inflict damage", () => {
        expect(bulb.useMove()).toBe(13);
    });
});
describe("Squirtle", () => {
    test("Squirtle is a water type with the correct name, hitpoints, attack damage and move", () => {
        expect(squirt.name).toBe("Squirtle");
        expect(squirt.hitPoints).toBe(44);
        expect(squirt.atkDmg).toBe(10);
        expect(squirt.move).toBe("Surf");
        expect(squirt.type).toBe("water");
    });
    test("Squirtle can take damage", () => {
        const deadsquirt = new Squirtle("Deed", 4, 12, "Rollover");
        deadsquirt.takeDamage(4);
        expect(deadsquirt.hitPoints).toBe(0);
        expect(deadsquirt.hasFainted()).toBe(true);
    });
    test("Squirtle can inflict damage", () => {
        expect(squirt.useMove()).toBe(10);
    });
});
describe("Eevee", () => {
    test("Eevee is a normal type with the correct name, hitpoints, attack damage and move", () => {
        expect(eevee.name).toBe("Eevee");
        expect(eevee.hitPoints).toBe(55);
        expect(eevee.atkDmg).toBe(10);
        expect(eevee.move).toBe("Headbutt");
        expect(eevee.type).toBe("normal");
    });
    test("Eevee can take damage", () => {
        const deadeevee = new Pokemon("Deed", 4, 12, "Rollover");
        deadeevee.takeDamage(4);
        expect(deadeevee.hitPoints).toBe(0);
        expect(deadeevee.hasFainted()).toBe(true);
    });
    test("Eevee can inflict damage", () => {
        expect(eevee.useMove()).toBe(10);
    });
});
