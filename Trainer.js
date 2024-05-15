class Trainer { 
    constructor(name) { 
        this.name = name;
        this.pokemons = []; 
    } 

    catchPokemon(pokemon) { 
        this.pokemons.push(pokemon);
    }

    selectPokemon() { 
        return this.pokemons[0];
    }
}

module.exports = Trainer; 