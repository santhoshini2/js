let mycar = new Object();
mycar.color = 'white';
mycar.start = function(){
    console.log(this.color + 'car started');
}
console.log(mycar);
console.log(typeof mycar);
mycar.start();
