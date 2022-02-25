function Fibonacci(size) {
    let fibonacciSeries = '';
    let firstElement = 0, secondElement = 1;
    let temp = 3;
    while (size--) {
        fibonacciSeries = fibonacciSeries + firstElement + ' ';
        temp = firstElement + secondElement;
        firstElement = secondElement;
        secondElement = temp;

    }
    return fibonacciSeries;
}
console.log(Fibonacci(3));
console.log(Fibonacci(7));
