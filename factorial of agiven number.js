function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    } n
    // Recursive case: n * factorial of (n-1)
    return n * factorial(n - 1);
}

// Example usage:
const number = 5;
const result = factorial(number);
console.log(number ,result);


/*
factoail is the product of all positive integers less than or equal to . The factorial of also equals the product of with the next smaller factorial:
factorial = n*(n-1)

ex: 1! = 1
    2!= 2
    3!= 6
    4!= 24
    */

