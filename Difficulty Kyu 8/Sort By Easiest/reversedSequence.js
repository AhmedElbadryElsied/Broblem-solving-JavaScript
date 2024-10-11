// Reversed sequence

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

function reversSeq(n){
    
    let newArray = [];

    for(let i = n ; i > 0 ; i-- ){
        newArray.push(i);
    }
    return newArray;

}
console.log(reversSeq(5));