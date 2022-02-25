function findfactorial(num) {
    if(num == 1) {
        return 1;
    }
        else
        return num * findfactorial(num - 1);
    }

console.log(findfactorial(3));
console.log(findfactorial(7));