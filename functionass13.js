function findHundredthDigit (num)  {
    let hundredthDigit;
    let count = 3;
    while (count--) {
        hundredthDigit = num % 10;
        num = parseInt(num / 10);
    }
    return hundredthDigit;
}
 console.log(findHundredthDigit(1784));
console.log(findHundredthDigit(345789));
