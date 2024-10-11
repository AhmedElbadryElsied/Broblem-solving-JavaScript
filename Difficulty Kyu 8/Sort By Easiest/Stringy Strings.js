// Stringy Strings

// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.



// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size){

    let arr =[];
    for(let i=0 ; i<size ; i++){
        if(arr.length < size){
            arr.push("1");
            arr.push("0");
        }   
    }
    if(arr.length > size){
        return arr.slice(0 ,-1).join("");
    }
    return arr.join("");
    

}
console.log(stringy(10))