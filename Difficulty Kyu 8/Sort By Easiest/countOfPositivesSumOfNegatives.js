// Count of positives / sum of negatives




// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countOfPositivesSumOfNegatives(input){

    if(input === null){
        return []
    }
    else{
       
        let positeveNumber= input.filter((ele)=> ele > 0).length;
        let negativeNumber= input.filter((ele)=>ele < 0).reduce((acc,current)=>acc + current,0);
        if(positeveNumber === 0 && negativeNumber === 0 ){
            return []
        }
        else{
            return [positeveNumber , negativeNumber];
        }
    }

    // if(input == null){
    //     return []
    // }
    // else{
    //     let countNegativeNumbers=0;
    // let negativeNumbers=[];
    // let positiveNumbers=[];
    // for(let i=0 ; i<input.length ; i++){
       
    //     if(input[i] > 0){
    //         positiveNumbers.push(input[i]);
    //     }
    //     else if(input[i] < 0){
    //         negativeNumbers.push(input[i]);
    //         countNegativeNumbers += input[i]
    //     }
       
      
    // }
    // if(positiveNumbers.length == 0 && countNegativeNumbers == 0){
    //     return []
    // }
    // else{
    //     return [positiveNumbers.length , countNegativeNumbers];
    // }
       

    // }

    
}
console.log(countOfPositivesSumOfNegatives([0,0]))