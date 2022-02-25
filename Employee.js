function Employee(id, name) {
    this.id = id;
    this.name = name;
}
let emp1 = new Employee(123, 'santhoshini');

let emp2 = new Employee(65, 'takshay');
console.log(typeof emp1);
console.log(typeof emp2);

console.log(emp1, emp2);
console.log(emp1.name, emp2['name']);