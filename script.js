function Character(name, proffesion, Age, streangth, HP){
    this.name = name;
    this.proffesion = proffesion;
    this.Age = Age;
    this.streangth = streangth;
    this.HP = HP;

    name: "Pikachu";
    proffesion:"Shoots Lightenting Bolts";
    Age: 8;
    streangth: 44;
    HP: 240;

}

Character.prototype.logInfo = function(){
    console.log(`
    Name: ${this.name} 
    Main skill: ${this.proffesion}
    Age:${this.Age}
    Streangth:${this.streangth}
    HP:${this.HP} `);
}

console.log(Character)

const Character1 = new Character("Charmander", "Shoots Fire", 10, 38, 240)
const Character2 =  new Character("Bulbasaur", "Uses Whine Whip", 6, 55, 240)
const Character3 =  new Character("Squirtle", "Shoots Bubbles", 7, 49, 240)

Character1.logInfo();
Character2.logInfo();
// Character3.logInfo();

Character.prototype.isAlive = function() {
    if (this.HP > 0){
        console.log("\n-------------------\n");
        console.log(this.name + "is still alive!");
        console.log("\n-------------------\n");
        return true;
    }
    console.log(this.name + "has died!");
    return false;
};

Character.prototype.attack = function(Character1) {
    console.log("\n-------------------\n");
    Character1.HP -= this.streangth;
};

Character.prototype.levelUp = function() {
    this.age += 1;
    this.streangth += 1;
    this.HP += 10;
}

Character1.attack(Character2)
Character2.attack(Character1)

Character1.logInfo();
Character1.isAlive();

Character2.logInfo();
Character2.isAlive();