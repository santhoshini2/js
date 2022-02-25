function animal (name) {
    this.name = name;
}

animal.prototype.speak = function() {
    console.log(`${this.name}makes a noise.`);
}

class dog extends animal {
    speak() {
        console.log(`${this.name}barks.`);
    }
}

let d = new dog('my dog');
d.speak();