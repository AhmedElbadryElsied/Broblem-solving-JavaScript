// Summing a number's digits

// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
// link ===> https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript


function sumDigits(number) {



  return  number.toString().split("").filter((ele)=> ele != "-").reduce((curent , acc)=> Number.parseFloat(curent) + Number.parseFloat(acc)  , 0)



}



console.log(sumDigits(-99))

