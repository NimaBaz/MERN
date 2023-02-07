const Ninja = require('./ninja.js')

class Master extends Ninja {
    constructor(name) {
        super(name, 1000, 1000, 1000)
    }

    flip() {
        super.duck();
        this.health += 10;
        this.speed -= 10;
        console.log("hooooooo!")
        return this;
    }

    attack() {
        this.health += 10;
        this.speed -= 10;
        console.log("Yah!!")
        return this;
    }
}

const Nima = new Master("Nima Bazofti")

console.log("---------------------------------------");
Nima.showStats()
console.log("---------------------------------------");
Nima.flip()
console.log("---------------------------------------");
Nima.showStats()
console.log("---------------------------------------");
Nima.attack()
console.log("---------------------------------------");
Nima.showStats()
