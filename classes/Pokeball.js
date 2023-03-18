class Pokeball {
    constructor() {
        this.stored = {};
    }
    throw(target) {
        if (target) {
            if (Object.keys(this.stored).length === 0) {
                this.stored = target;
                console.log(`You caught ${target.name}!`);
            }
        } else if (this.stored.hasOwnProperty("name")) {
            console.log(`GO ${this.stored.name}!`);
            return this.stored;
        } else {
            console.log("This ball is empty");
        }
    }

    isEmpty() {
        return Object.keys(this.stored).length === 0 ? true : false;
    }

    contains() {
        return this.isEmpty() ? "empty" : this.stored.name;
    }
}

module.exports = Pokeball;
