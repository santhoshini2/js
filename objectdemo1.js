var mycar = {
    name:"Tiago",
    model:2018,
    color:"orange",
    speed :0,
    move:function() {
        this.speed++;
    }
};
mycar.move();
mycar.move();
mycar.move();
console.log(mycar.speed);
