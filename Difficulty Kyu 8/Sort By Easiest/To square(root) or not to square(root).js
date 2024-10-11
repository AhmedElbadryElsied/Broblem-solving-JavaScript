// To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.


function squareOrSquarRoot(array){

    
    // return array.map((ele)=> Number.isInteger(Math.sqrt(ele)) ? Math.sqrt(ele) : ele * ele);


    let newArrey=[];
    for(let num of array){

        if (Number.isInteger(Math.sqrt(num))) {
            newArrey.push(Math.sqrt(num))
        } else {
            newArrey.push(num * num);
        }
    }
    return newArrey;

}
console.log(squareOrSquarRoot([4,3,9,7,2,1]));
