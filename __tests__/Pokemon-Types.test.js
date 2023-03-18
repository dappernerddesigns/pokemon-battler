const { FireType, WaterType, GrassType } = require("../classes/Pokemon-Types");

describe("Fire type", () => {
    const flame = new FireType();
    test("Fire pokemon has the correct type", () => {
        expect(flame.type).toBe("fire");
    });
    test("Fire Pokemon is effective against Grass types", () => {
        expect(flame.isEffectiveAgainst("grass")).toBe(true);
    });
    test("Fire Pokemon is weak against water types", () => {
        expect(flame.isWeakTo("water")).toBe(true);
    });
    test("Fire pokemon are not effective against or weak to fire pokemon", () => {
        expect(flame.isEffectiveAgainst("fire")).toBe(false);
        expect(flame.isWeakTo("fire")).toBe(false);
    });
});

describe("Water type", () => {
    const water = new WaterType();
    test("Water pokemon has the correct type", () => {
        expect(water.type).toBe("water");
    });
    test("Water pokemon is effective against fire types", () => {
        expect(water.isEffectiveAgainst("fire")).toBe(true);
    });
    test("Water pokemon is weak against grass types", () => {
        expect(water.isWeakTo("grass")).toBe(true);
    });
    test("Water is neither weak or effective against water", () => {
        expect(water.isEffectiveAgainst("water")).toBe(false);
        expect(water.isWeakTo("water")).toBe(false);
    });
});

describe("Grass type", () => {
    const grass = new GrassType();
    test("Grass pokemon has the correct type", () => {
        expect(grass.type).toBe("grass");
    });
    test("Grass pokemon is effective against water types", () => {
        expect(grass.isEffectiveAgainst("water")).toBe(true);
    });
    test("Grass pokemon is weak against fire types", () => {
        expect(grass.isWeakTo("fire")).toBe(true);
    });
    test("Grass is neither weak or effective against grass", () => {
        expect(grass.isEffectiveAgainst("grass")).toBe(false);
        expect(grass.isWeakTo("grass")).toBe(false);
    });
});
