var user = {
    name:"santhoshini",
    age: 23
};

var clone ={};
for(let key in user) {
    clone[key] =user[key];

}
console.log(user);
console.log(clone);

clone. name ='bhahubhali';

console.log(user);
console.log(clone);