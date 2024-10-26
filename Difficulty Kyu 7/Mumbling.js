// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s){
    let newArray=[];
    for(let i=0;i<s.length;i++){
        newArray.push(s[i].repeat(i + 1))
    }

    return newArray.map((ele)=>ele[0].toUpperCase()+ ele.slice(1).toLowerCase()).join("-");

}
console.log(accum("pairokdyheW"));

