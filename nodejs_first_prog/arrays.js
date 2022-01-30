let arr = [1, 2, 3, 4, 5];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// higher order functions
// functions that take other functions as arguments or return functions as a result are 
// called higher order functions

// map filter reduce
// map - returns a new array
console.log("using map logged------");
function logger(value) {
    console.log(value)
}
arr.map(logger)
console.log("using map to double the values");
function doubler(value) {
    return value * 2;
}
let doubled = arr.map(doubler);
console.log(doubled);


// filter - returns a new array
function odd(value) {
    if (value % 2 == 1) {
        return true;
    } else {
        return false;
    }
}
console.log("using filter to filter out odd numbers");
let oddNumbers = arr.filter(odd);
console.log(oddNumbers);

// reduce - returns a single value
console.log("using reduce to sum the values");
function findSum(total, value) {
    return total + value;
}
let sum = arr.reduce(findSum);
console.log(sum);





