var emp = {
    name: "jack",
    salary : 606060,
    city :"hyderabad",
    get empcity() {
        return this.city;
    },
    get empname() {
        return this.name;
    }
    
};
console.log(emp.empcity);
console.log(emp.empname);