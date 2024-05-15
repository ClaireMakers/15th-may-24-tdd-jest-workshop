const Pokemon = require("./Pokemon"); 


describe("Unit tests for the Pokemon class", () => { 
    test("test label", () => {
        //this is a callback function where I will write my test
    }); 

    test("The pokemon class builds with a name, healthPoint, attackPoints", () => {
        const testPokemon = new Pokemon("Magicarp", 2, 1);

        expect(testPokemon.name).toEqual("Magicarp");
        expect(testPokemon.healthPoints).toEqual(2);
        expect(testPokemon.attackPoints).toEqual(1);
    });
})