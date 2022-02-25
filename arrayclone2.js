var user = {
    name: "jfbnvj",
    age: 1000
};

var clone = {};
Object.assign(clone,user);

console.log(user);
console.log(clone);

clone.name = 'hjdjnf';

console.log(user);
console.log(clone);