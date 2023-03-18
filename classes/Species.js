const { FireType, WaterType, GrassType } = require("./Pokemon-Types");

class Charmander extends FireType {
    constructor(name, hitPoints, atkDamage, move) {
        super(name, hitPoints, atkDamage, move);
    }
}

class Flareon extends FireType {
    constructor(name, hitPoints, atkDamage, move) {
        super(name, hitPoints, atkDamage, move);
    }
}

class Squirtle extends WaterType {
    constructor(name, hitPoints, atkDamage, move) {
        super(name, hitPoints, atkDamage, move);
    }
}

class Vaporeon extends WaterType {
    constructor(name, hitPoints, atkDamage, move) {
        super(name, hitPoints, atkDamage, move);
    }
}

class Bulbasaur extends GrassType {
    constructor(name, hitPoints, atkDamage, move) {
        super(name, hitPoints, atkDamage, move);
    }
}
class Leafeon extends GrassType {
    constructor(name, hitPoints, atkDamage, move) {
        super(name, hitPoints, atkDamage, move);
    }
}

module.exports = {
    Charmander,
    Squirtle,
    Bulbasaur,
    Flareon,
    Vaporeon,
    Leafeon,
};
