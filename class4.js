class rectangle {
    constructor(height,width) {
    this.height = height;
    this.width = width;
}

get area() {
    return this.calcArea();
}

calcArea() {
    return this.height * this.width;

}

}

const square = new rectangle(10,10);
console.log(square.area);