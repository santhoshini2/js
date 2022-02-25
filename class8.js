class animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class dog extends animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name}barks.`);
    }
}

let d = new dog('German shepherd');
d.speak();