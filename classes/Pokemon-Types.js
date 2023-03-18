const Pokemon = require("./Pokemon");

class FireType extends Pokemon {
    constructor() {
        super();
        this.type = "fire";
    }
}

class WaterType extends Pokemon {
    constructor() {
        super();
        this.type = "water";
    }
}

class GrassType extends Pokemon {
    constructor() {
        super();
        this.type = "grass";
    }
}
module.exports = { FireType, WaterType, GrassType };
