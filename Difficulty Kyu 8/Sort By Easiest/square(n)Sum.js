// Square(n) Sum


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.



function squireSum(numbers){
    // let count=0;
    // let newArray=[];
    // for(let i=0 ; i < numbers.length ; i++){
    //     newArray.push(Math.pow(numbers[i],2));
    //     count += newArray[i];
    // }
    // return count;

    return numbers.map((ele)=>ele ** 2).reduce((acc , current)=> acc + current , 0);

}
console.log(squireSum([1,2]))