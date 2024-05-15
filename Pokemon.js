class Pokemon { 
    constructor(name, healthPoints, attackPoints) { 
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
    }

    getName() { 
        return this.name; 
    }
}

module.exports = Pokemon; 