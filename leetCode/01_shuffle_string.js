const shuffleString = (s, indices) => {
    let resultArray = new Array(s.length)
    indices.forEach((value, i) => {
        resultArray[value] = s[i]
    });
    return resultArray.join("")
}
console.log(shuffleString("ohal", [1,0,3,2]))