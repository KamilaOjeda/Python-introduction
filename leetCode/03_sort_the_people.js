/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
var sortPeople = function(names, heights) {
    let hashMap = new Map()
    for (let j = 0; j < heights.length; j++) {
        hashMap.set(heights[j], names[j])
    }
    const sortedHashMap = new Map([...hashMap.entries()].sort((a, b) => b[0] - a[0]))
    console.log(sortedHashMap)
    const outputArray = new Array()
    sortedHashMap.forEach((value, _) => {
        outputArray.push(value)
    });
    return outputArray

};

console.log(sortPeople(["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"], [17233,32521,14087,42738,46669,65662,43204,8224]))