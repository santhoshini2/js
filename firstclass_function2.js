function a() {
console.log("a function called");
}

function b(myvar) {
console.log("b function called");
myvar();
}
b(a);
