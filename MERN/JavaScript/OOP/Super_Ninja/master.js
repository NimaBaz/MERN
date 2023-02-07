const Ninja = require('./ninja.js')

class Master extends Ninja {
    constructor(name) {
        super(name, 1000, 1000, 1000)
        this.wisdom = 10;
    }

    speakWisdom() {
        this.wisdom += 10;
        this.health += 50;
        this.speed += 10;
        this.strength += 20;
        console.log("Find inner peace");
        return this;
    }

    flip() {
        super.duck();
        this.health += 10;
        this.speed -= 10;
        console.log("hooooooo!")
        return this;
    }

    attack(target) {
        target.health -= this.strength;
        console.log(`Yah!! ${this.name} attacked ${target.name}, dealing ${this.strength} damage!`);
        console.log(`${target.name} now has ${target.health} HP.`)
        return this;
    }

    finishThem(target) {
        target.health -= 5000;
        console.log(`Yah!! ${this.name} attacked ${target.name}, dealing the final blow of 5000 damage!`);
        console.log(`${target.name} now has ${target.health} HP.`)
        return this;
    }
}

const ninja1 = new Master("Nima Bazofti")
const ninja2 = new Master("Veronika Kontos")
const ninja3 = new Ninja("Big Man", 1000);
const ninja4 = new Ninja("The Rock", 1000);

console.log("---------------------------------------");
ninja1.showStats()
console.log("---------------------------------------");
ninja1.flip()
console.log("---------------------------------------");
ninja1.showStats()
console.log("---------------------------------------");
ninja1.attack(ninja2)
console.log("---------------------------------------");
ninja1.showStats()
console.log("---------------------------------------");
ninja1.speakWisdom()
console.log("---------------------------------------");
ninja1.showStats()

console.log("---------------------------------------");

ninja2.showStats()
console.log("---------------------------------------");
ninja2.flip()
console.log("---------------------------------------");
ninja2.showStats()
console.log("---------------------------------------");
ninja2.attack(ninja1)
ninja2.finishThem(ninja1)
console.log("---------------------------------------");
ninja2.showStats()
console.log("---------------------------------------");
ninja2.speakWisdom()
console.log("---------------------------------------");
ninja2.showStats()

console.log("---------------------------------------");

ninja3.showStats()
console.log("---------------------------------------");
ninja3.flip()
console.log("---------------------------------------");
ninja3.showStats()
console.log("---------------------------------------");
ninja3.attack()
ninja3.finishThem(ninja4)
console.log("---------------------------------------");
ninja3.showStats()
console.log("---------------------------------------");
ninja3.speakWisdom()
console.log("---------------------------------------");
ninja3.showStats()

console.log("---------------------------------------");

ninja4.showStats()
console.log("---------------------------------------");
ninja4.flip()
console.log("---------------------------------------");
ninja4.showStats()
console.log("---------------------------------------");
ninja4.attack(ninja3)
ninja4.finishThem(ninja3)
console.log("---------------------------------------");
ninja4.showStats()
console.log("---------------------------------------");
ninja4.speakWisdom()
console.log("---------------------------------------");
ninja4.showStats()
