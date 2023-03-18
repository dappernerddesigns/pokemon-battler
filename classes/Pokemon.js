class Pokemon {
    constructor(name, hitPoints, attackDamage, move) {
        this.name = name;
        this.type = "normal";
        this.hitPoints = hitPoints;
        this.atkDmg = attackDamage;
        this.move = move;
    }
    isEffectiveAgainst(atkType) {
        if (this.type === "fire" && atkType === "grass") {
            return true;
        } else if (this.type === "water" && atkType === "fire") {
            return true;
        } else if (this.type === "grass" && atkType === "water") {
            return true;
        } else return false;
    }

    isWeakTo(attackerType) {
        if (this.type === "fire" && attackerType === "water") {
            return true;
        } else if (this.type === "water" && attackerType === "grass") {
            return true;
        } else if (this.type === "grass" && attackerType === "fire") {
            return true;
        } else return false;
    }
    takeDamage(attackerDamage) {
        this.hitPoints -= attackerDamage;
    }
    useMove() {
        console.log(`${this.name} used ${this.move}!`);
        return this.atkDmg;
    }
    hasFainted() {
        return this.hitPoints > 0 ? false : true;
    }
}

module.exports = Pokemon;
