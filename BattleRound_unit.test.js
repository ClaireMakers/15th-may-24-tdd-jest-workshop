const BattleRound = require("./BattleRound");
const Trainer = require("./Trainer");

jest.mock("./Trainer");

describe("Unit tests for the battle round", () => {
  beforeEach(() => {
    // Before each test, reset the mock
    // This helps starting each test case
    // with a "fresh" mocked class
    Trainer.mockClear();
  });

  it("Plays a battle round and returns the winning pokemon", () => {
    // 1. We use the normal constructor - Jest will take care of creating a mock.
      const mockTrainerOne = new Trainer();
      const mockTrainerTwo = new Trainer();

      const doublePokemonOne = {
          name: "test pokemon 1",
          attackPoints: 1,
          healthPoints: 2
      }

      const doublePokemonTwo = {
        name: "test pokemon 2",
        attackPoints: 0,
        healthPoints: 1,
      };

    // 2. We mock the method getMove, replacing its normal implementation
    // with a custom function (which here simply returns 'paper').
      mockTrainerOne.selectPokemon.mockImplementation(() => { return doublePokemonOne });
      mockTrainerTwo.selectPokemon.mockImplementation(() => {
        return doublePokemonTwo;
      });

  
      const battleRoundOne = new BattleRound(mockTrainerOne, mockTrainerTwo);
      const result = battleRoundOne.playBattleRound();

      expect(result).toEqual(doublePokemonOne);
  });
});