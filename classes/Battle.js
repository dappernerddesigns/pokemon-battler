class Battle {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.turn = true;
        this.attacker = playerOne;
        this.defender = playerTwo;
        this.randomNum = Math.floor(Math.random() * 11);
    }
    fight(atkPoke, defPoke) {
        let damage = atkPoke.useMove();
        if (this.randomNum < 3) {
            damage *= 3;
            console.log("Critical hit!");
        } else if (atkPoke.isEffectiveAgainst(defPoke.type)) {
            damage *= 1.25;
            console.log("It was super effective!");
        } else if (atkPoke.isWeakTo(defPoke.type)) {
            damage *= 0.75;
            console.log("It wasn't very effective");
        }
        defPoke.takeDamage(damage);
        if (defPoke.hasFainted()) {
            console.log(
                `Oh no! ${defPoke.name} has fainted and can't continue. ${atkPoke.name} wins this round!`
            );
            return `Oh no! ${defPoke.name} has fainted and can't continue. ${atkPoke.name} wins this round!`;
        }

        this.turn ? (this.turn = false) : (this.turn = true);
        this.attacker = this.turn ? this.playerOne : this.playerTwo;
        this.defender = this.turn ? this.playerTwo : this.playerOne;
    }
}

module.exports = Battle;
