/*
0 1 1 2 3 5 8 13 21 34 55 89 144...
Each Value is the sum of the previous 2 values
n=(n-1)+(n-2)
Create a recursive function that t

*/

const { log } = console;

const fibonacciIterative = (n) => {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let i = 2;
    let c;

    while (i <= n) {
        c = a + b;
        a = b;
        b = c;
        i++;
    }

    return c, log(c);
};
//can also use a push to array loop to find the fibonacci values.
// fibonacciIterative(12);

const fibonacciRecursive = (n) => {
    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
};

log(fibonacciRecursive(12));