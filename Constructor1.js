function Employee(id,name,salary) {
    this.id = id,
    this.name = name,
    this.salary = salary,
    this.age = -1;
}
var emp1 = new Employee(1,"jack",8099);
var emp2 = new Employee(2,"kate",5432);

console.log(typeof(emp1));
console.log(emp1.name);
console.log(emp2["name"]);

emp1.city = "hyderabad";
console.log(emp1.city);
console.log(emp2.city);
console.log(emp1.age);
console.log(emp2.age);