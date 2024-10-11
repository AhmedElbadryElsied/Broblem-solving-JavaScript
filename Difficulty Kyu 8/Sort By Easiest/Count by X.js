// Count by X

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


function countBy(x,n){

    let newArray = [];

    for(let i = x ; newArray.length + 1 <= n  ; i+= x){
        newArray.push(i);
    }
    return newArray;

}
console.log(countBy(50,10))