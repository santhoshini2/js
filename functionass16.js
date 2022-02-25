function makeDecimal (a, b, c)  {
    multiple = makeMultiple(countDigit(c));
    return a + (b * multiple + c) / makeMultiple(countDigit(b * multiple + c));
}
console.log(makedecimal(2,45,3));