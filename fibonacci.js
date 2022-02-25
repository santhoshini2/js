let firstNum = 0;
let secondNum = 1;
let howmany = 100;
console.log(firstNum);
console.log(secondNum);
for(var i = 0;i < howmany-2; i++) {
    let next =secondNum + firstNum;
    console.log(next);
    firstNum = secondNum;
    secondNum = next;
}