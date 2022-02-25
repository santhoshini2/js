function isPrime(num) {
     flag = true;
    if (num == 1) {
        flag = false;
    }
    for (var i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag)
        console.log(num + ' is prime');
    else
        console.log(num + ' is not prime')
}
console.log(isPrime(11));
console.log(isPrime(1756));