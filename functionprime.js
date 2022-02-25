function isprime(num) {
    let i = 2;
    if(num % i ==0 && i <= parseInt(num/2))
    return false;
    else
    return true;
}
console.log(isprime(2));
console.log(isprime(3));
console.log(isprime(4));
console.log(isprime(5));
console.log(isprime(6));
console.log(isprime(7));
console.log(isprime(8));
console.log(isprime(122));
console.log(isprime(121));
