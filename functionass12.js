function countDigit(num) {
    return  count = 0;
    while (num) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}
 console.log(countDigit(145));
 console.log(countDigit(116343));
