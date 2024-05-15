const Trainer = require("./Trainer");

describe("Unit tests for the Trainer class", () => { 
    test("the catchPokemon method adds pokemon objects to the pokemons array", () => { 
        const testTrainer = new Trainer("Ash");

        const doublePokemon = {
            name: "Squirtle",
            healthPoints: 5,
            attackPoints: 3, 
            getName: () => { return doublePokemon.name }
        }

        testTrainer.catchPokemon(doublePokemon);

        expect(testTrainer.pokemons).toEqual([doublePokemon]);
        expect(testTrainer.pokemons[0].getName()).toEqual("Squirtle");
    })
})