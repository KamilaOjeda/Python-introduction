/**
 * @param {number[][]} accounts
 * @return {number}
 */
let accounts = [[1,2,3],[3,2,1]]
let accounts2 = [[1,5],[7,3],[3,5]]
let accounts3 = [[2,8,7],[7,1,3],[1,9,5]]

var maximumWealth = function(accounts) {
    // Sumar elementos de cada arreglo: 1+2+3 = 6 ^3+2+1= 6 => el mayor es 6
   return (accounts.map((e) => (e.reduce((a, b) => a + b, 0)))).reduce((a,b) => Math.max(a,b))
};

var maximumWealth = function(accounts) {
    // Sumar elementos de cada arreglo: 1+2+3 = 6 ^3+2+1= 6 => el mayor es 6
   return Math.max(...accounts.map((e) => (e.reduce((a, b) => a + b, 0))))
};

// var maximumWealth = function(accounts) {
//     let sumasArray = []
//     // Sumar elementos de cada arreglo: 1+2+3 = 6 ^3+2+1= 6 => el mayor es 6
//     for (let i = 0; i < accounts.length; i++) {
//         let total = accounts[i].reduce((a, b) => a + b, 0);
//         sumasArray[i] = total
//     }
//     return Math.max(...sumasArray)
// };

console.log(maximumWealth(accounts3))