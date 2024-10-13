// Printing Array elements with Comma delimiters

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕


function printArray(array){

    // return array.join(",");

    // let str="";

    // for(let ele of array){
    //     str += ele + ",";
    // }
    // return str.slice(0,-1);

    return array.reduce((acc , current)=> acc + "," + current);


}
console.log(printArray(["h","o","l","a"]))
