var mycar = new Object();
mycar.name = "Tiago";
mycar.model = 2020;
mycar.color ="orange";
mycar.speed = 0;
mycar.move = function(){
    this.speed++;
}
console.log(mycar.name);
console.log(mycar["model"]);
console.log(mycar.color);
mycar.move();

console.log(mycar.speed);