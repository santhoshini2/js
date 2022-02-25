var emp = {
    name:"jack",
    salary:56789,
    city:"hyderabad",

    set empcity(empcity) {
        this.city = empcity;
    },
        set empName(empName) {
            this.name = empName;

        }
    };
emp.empcity ="kothapet";
emp.empName ="santhoshini";
console.log(emp["name"]);
console.log(emp.city);