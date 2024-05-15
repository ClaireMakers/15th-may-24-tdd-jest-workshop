const BattleRound = require("./BattleRound");
const Trainer = require("./Trainer");
const Pokemon = require("./Pokemon");

describe("Integration tests for the BattleRound class", () => { 
    test("Plays a battle round and retuns the winning pokemon", () => { 
        const ash = new Trainer("Ash");
        const gary = new Trainer("Gary"); 

        const charizard = new Pokemon("Charizard", 6, 2);
        const pikachu = new Pokemon("Pikachu", 4, 1);

        ash.catchPokemon(pikachu);
        gary.catchPokemon(charizard);
        
        const battleRoundOne = new BattleRound(ash, gary);

        expect(battleRoundOne.playBattleRound()).toEqual(charizard);
    })
})