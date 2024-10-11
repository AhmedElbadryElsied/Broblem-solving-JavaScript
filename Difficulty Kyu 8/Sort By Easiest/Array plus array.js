// Array plus array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.



// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript


function arrayPlusArray(arr1 , arr2){

    // let resultArray= [];
    // return resultArray.concat(arr1 , arr2).reduce((acc , current)=> acc + current , 0);

    let count1=0;
    for(let num of arr1){
        count1 += num;
    }

    let count2=0;

    for(let num of arr2){
        count2 += num;
    }

    return count1 + count2;

}
console.log(arrayPlusArray([1,2,3] , [4,5,6]))

