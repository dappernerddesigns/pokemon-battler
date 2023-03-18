const Pokemon = require("./Pokemon");

class FireType extends Pokemon {
    constructor() {
        super();
        this.type = "fire";
    }
    isEffectiveAgainst(atkType) {
        if (atkType === "grass") {
            return true;
        }
        return false;
    }
    isWeakTo(atkType) {
        if (atkType === "water") {
            return true;
        }
        return false;
    }
}

class WaterType extends Pokemon {
    constructor() {
        super();
        this.type = "water";
    }
    isEffectiveAgainst(atkType) {
        if (atkType === "fire") {
            return true;
        }
        return false;
    }
    isWeakTo(atkType) {
        if (atkType === "grass") {
            return true;
        }
        return false;
    }
}

class GrassType extends Pokemon {
    constructor() {
        super();
        this.type = "grass";
    }
    isEffectiveAgainst(atkType) {
        if (atkType === "water") {
            return true;
        }
        return false;
    }
    isWeakTo(atkType) {
        if (atkType === "fire") {
            return true;
        }
        return false;
    }
}
module.exports = { FireType, WaterType, GrassType };
