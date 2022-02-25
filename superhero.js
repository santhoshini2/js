let superhero = {
    name: 'jai hanuman',
    age: 100000,
    powers: ['fly', 'healing'],
    fly: function() {
        console.log(this.name + 'ji is flying');
    }
}
console.log(superhero.name, superhero.age, superhero.powers);
superhero.fly();
