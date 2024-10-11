// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){

    // let result = 0;

    // for(let i =0 ; i<x.length ; i++){

    //     result += Number.parseFloat(x[i]);

    // }
    // return result;

    return x.map((ele)=>Number.parseFloat(ele)).reduce((acc,current)=>acc + current , 0); 

}
console.log(sumMix([9,3,"7","3"]))
