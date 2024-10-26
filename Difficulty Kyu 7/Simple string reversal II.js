// Simple string reversal II

// In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

// str = "codewars", a = 1, b = 5 --> "cawedors"
// str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"
// Input will be lowercase and uppercase letters only.

// The first index a will always be smaller than the string length; the second index b can be greater than the string length. More examples in the test cases. Good luck!

// Please also try:

// Simple time difference

// Simple remove duplicates

function solve(st,a,b){

    let startSt = st.split("").slice(0,a);
    let adeting = st.slice(a,b+1).split("").reverse();
    let endSt = st.split("").slice(b+1);
    return startSt.concat(adeting,endSt).join("");


}
console.log(solve("cODEWArs",1,5))

// console.log("cAWEDOrs"=== "cAWEDOrs")

