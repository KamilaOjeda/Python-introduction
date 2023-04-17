/**
 * @param {string[]} sentences
 * @return {number}
 */

const maxIntFound = (array) => {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {      
        if (max < array[i+1]) {
            max = array[i+1]
        }
    }
    return max
}

var mostWordsFound = function(sentences) {
    let arrayOfInts = sentences.map((sentence) => sentence.split(" ").length)
    return Math.max(...arrayOfInts)
  };

const result = mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"])

console.log(result)