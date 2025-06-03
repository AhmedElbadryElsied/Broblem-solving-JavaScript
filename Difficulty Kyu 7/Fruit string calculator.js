// Fruit string calculator


// You are given a string of words and numbers. Extract the expression including:

// the operator: either addition ("gains") or subtraction ("loses")
// the two numbers that we are operating on
// Return the result of the calculation.

// Notes:

// "loses" and "gains" are the only two words describing operators
// No fruit debts nor bitten apples = The numbers are integers and no negatives
// Examples
// "Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40
// Should be a nice little kata for you :)

function calculate(string){

    let maxNum ;
    let minNum ;
    let proces ;
    let numbers = [];

    for(let litter of string.split(" ")){

        if(litter == "loses"){

            proces = "loses"

        }else{
            proces = "gains"
        }
        if(Number.isInteger(Number.parseFloat(litter))){
            numbers.push(Number.parseFloat(litter))
            maxNum = Math.max(...numbers)
            minNum = Math.min(...numbers)
        }
    }

    switch (proces) {
        case "loses":
            return maxNum - minNum
            break;
        case "gains":
            return maxNum + minNum
            break;
    
        default:
            return 
            break;
    }

}
console.log(calculate("Jerry has 34 apples and gains 6"))

