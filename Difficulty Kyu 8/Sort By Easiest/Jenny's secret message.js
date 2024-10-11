// Jenny's secret message

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?


// return "Hello, " + name + "!";
// if(name === "johnny") 
//      return "Hello, my love!";
    

function greet(name){

   
    if(name === "johnny") return "Hello, my love!";
    
    return "Hello, " + name + "!";

}
console.log(greet("Ahmed"))