var myvar = function isEven(num) {
return num%2 == 0;
}
console.log(myvar(10));
console.log(myvar(11));
console.log(myvar);
console.log(typeof myvar);

console.log(myvar());
console.log(myvar(''));
console.log(myvar('YO YO'));
console.log('YO YO'% 2);
console.log(NaN == 0);
console.log(''%2);