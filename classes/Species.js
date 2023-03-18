const { FireType, WaterType, GrassType } = require("./Pokemon-Types");
const Pokemon = require("./Pokemon");

class Charmander extends FireType {
    constructor() {
        super();
    }
}

class Squirtle extends WaterType {
    constructor() {
        super();
    }
}

class Bulbasaur extends GrassType {
    constructor() {
        super();
    }
}

class Eevee extends Pokemon {
    constructor() {
        super();
    }
}
module.exports = { Charmander, Squirtle, Bulbasaur, Eevee };
