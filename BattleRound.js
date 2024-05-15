class BattleRound { 
    constructor(trainerOne, trainerTwo) { 
        this.trainerOne = trainerOne;
        this.trainerTwo = trainerTwo;
    }

    playBattleRound() { 
        const pokemonOne = this.trainerOne.selectPokemon();
        console.log(pokemonOne);
        const pokemonTwo = this.trainerTwo.selectPokemon(); 

        pokemonOne.healthPoints =
            pokemonOne.healthPoints - pokemonTwo.attackPoints;
        
        pokemonTwo.healthPoints = pokemonTwo.healthPoints - pokemonOne.attackPoints;
        
        if (pokemonOne.healthPoints > pokemonTwo.healthPoints) {
            return pokemonOne;
        } else { 
            return pokemonTwo;
        }
    }
    //play a battle round where: 
    // two trainers are coming up against each other
    // Each trainer selects a pokemon
    // We substract the attackPoints from the healthpoints of each pokemon
}

module.exports = BattleRound;