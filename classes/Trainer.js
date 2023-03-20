const Pokeball = require("./Pokeball");

class Trainer {
    constructor(trainerName) {
        this.name = trainerName;
        this.pokebelt = [
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
        ];
    }
    catch(targetPokemon) {
        if (!this.pokebelt[5].isEmpty()) return "No empty balls available!";
        const emptySlot = this.pokebelt.find((slot) => slot.isEmpty() === true);
        if (emptySlot) {
            emptySlot.throw(targetPokemon);
            console.log(`${this.name} caught ${targetPokemon.name}!\n`);
        }
    }

    getPokemon(pokemon) {
        const foundPokemon = this.pokebelt.find(
            (slot) => slot.stored.name === pokemon
        );
        if (foundPokemon) {
            return foundPokemon.throw();
        } else {
            return "No pokemon with that name in belt";
        }
    }
}

module.exports = Trainer;
