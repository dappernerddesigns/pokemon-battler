class Battle {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.turn = true;
        this.attacker = playerOne;
        this.defender = playerTwo;
    }
    fight(atkPoke, defPoke) {
        console.log(defPoke);
        defPoke.takeDamage(atkPoke.useMove());
        this.turn ? (this.turn = false) : (this.turn = true);
        this.attacker = this.turn ? this.playerOne : this.playerTwo;
        this.defender = this.turn ? this.playerTwo : this.playerOne;
    }
}

module.exports = Battle;
