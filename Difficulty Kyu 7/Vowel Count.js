// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str){
    let count = 0;
    for(let litter of str){
        litter == "a" || litter == "e" || litter == "i" || litter == "o" || litter == "u" ? count += 1 : null;
    }
    return count;

}
console.log(getCount("ldskijufaowepa"))
