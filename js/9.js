function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log("Getting result from cache...");
            return cache.get(key);
        }

        console.log("Calculating...");

        const result = fn(...args);

        cache.set(key, result);

        return result;
    };
}

function factorial(n) {
    console.log("Running factorial...");

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

const memoizedFactorial = memoize(factorial);

console.log("Task 09:", memoizedFactorial(5));
console.log("Task 09:", memoizedFactorial(5));