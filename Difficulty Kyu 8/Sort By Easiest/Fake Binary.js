// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){

    // let neuwNumbers="";
    // for(let num of x){
    //     neuwNumbers += num >= 5 ? 1 : 0 ;
    // }
    // return neuwNumbers;


    return x.split("").map((ele)=> ele >= 5 ? "1" : "0").join("");

}
console.log(fakeBin("01679"));