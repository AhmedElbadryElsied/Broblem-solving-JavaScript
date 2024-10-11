// Abbreviate a Two Word Name


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbervName(name){

    // let newArray =name.split(" ");
    // let abbervNameArray=[]
    // for(let nam of newArray){
    //    abbervNameArray.push(nam.slice(0,1).toUpperCase());
    // }

    // return abbervNameArray.join(".");


    return name.split(" ").map((ele)=>ele.slice(0,1).toUpperCase()).join(".");

}
console.log(abbervName("Ahmed Elbadry"))