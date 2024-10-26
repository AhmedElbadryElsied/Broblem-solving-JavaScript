// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort (s) {

    let wordsArray=s.split(" ");
    let couent=0;
    let cowentWordsArray=[]
    for(let words of wordsArray){
        couent=0
        for(let i=0 ; i<words.length ; i++){
            couent++
        }
        cowentWordsArray.push(couent);
    }
    return Math.min(...cowentWordsArray);

}
console.log(findShort("will never be empty and you"))
