function Fighter(obj) {
    let name = obj.name,
        damage = obj.damage,
        strength = obj.strength,
        agility = obj.agility,
        health = obj.hp,
        wins = 0,
        losses = 0;
    const MAX_HEALTH = obj.hp;

    return {
        getName: () => name,
        getDamage: () => damage,
        getStrength: () => strength,
        getAgility: () => agility,
        getHealth: () => health,
        attack: function(enemy) {
            const MISS_PROBABILITY = enemy.getStrength() + enemy.getAgility();
            const MAX_CHANSE = 100;
            let attackProbability = Math.random() * MAX_CHANSE;
            if (attackProbability > MISS_PROBABILITY) {
                enemy.dealDamage(this.getDamage());
                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${enemy.getName()}`);
            } else {
                console.log(`${this.getName()} attack missed`);
            }
        },
        logCombatHistory: function() {
            console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`)
        },
        heal: function(healthPoints) { 
            health = this.getHealth() + healthPoints > MAX_HEALTH ? MAX_HEALTH : health + healthPoints; 
        },
        dealDamage: function(damagePoints) {
            health = health - damagePoints < 0 ? 0 : health - damagePoints;
        },
        addWin: () => wins++,
        addLoss: () => losses++
    };
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0) {
        while (fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        let losser = fighter1.getHealth() === 0 ? fighter1 : fighter2;
        let winner = fighter1.getHealth() !== 0 ? fighter1 : fighter2;
        losser.addLoss();
        winner.addWin();
        console.log(`${winner.getName()} has won!`);
    } else {
        let deadFighter = fighter1.getHealth() === 0 ? fighter1.getName() : fighter2.getName();
        console.log(`${deadFighter} is dead and can't fight.`);
    }
}

const myFighter = new Fighter({
    name: 'Nikita',
    damage: 25,
    strength: 30,
    agility: 25,
    hp: 100
});
const myEnemy = new Fighter({
    name: 'Bad Code',
    damage: 20,
    strength: 25,
    agility: 20,
    hp: 90
});
battle(myFighter, myEnemy);