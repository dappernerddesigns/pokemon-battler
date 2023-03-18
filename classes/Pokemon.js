class Pokemon {
    constructor(name, hitPoints, attackDamage, move) {
        this.name = name;
        this.type = "normal";
        this.hitPoints = hitPoints;
        this.atkDmg = attackDamage;
        this.move = move;
    }
    isEffectiveAgainst(atkType) {
        return false;
    }

    isWeakTo(attackerType) {
        return false;
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
