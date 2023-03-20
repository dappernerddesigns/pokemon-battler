class Battle {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.turn = true;
        this.attacker = playerOne;
        this.defender = playerTwo;
    }
    fight(atkPoke, defPoke) {
        let damage = atkPoke.useMove();

        if (atkPoke.isEffectiveAgainst(defPoke.type)) {
            damage *= 1.25;
            console.log("It was super effective!");
        } else if (atkPoke.isWeakTo(defPoke.type)) {
            damage *= 0.75;
            console.log("It wasn't very effective");
        }
        defPoke.takeDamage(damage);
        defPoke.hasFainted()
            ? console.log(
                  `${defPoke.name} has fainted! ${atkPoke.name} wins this round!`
              )
            : null;
        this.turn ? (this.turn = false) : (this.turn = true);
        this.attacker = this.turn ? this.playerOne : this.playerTwo;
        this.defender = this.turn ? this.playerTwo : this.playerOne;
    }
}

module.exports = Battle;
