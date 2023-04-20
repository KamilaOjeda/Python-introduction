/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [3,4,5,2]
var maxProduct = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            return nums[i]
        } else {
            return nums[i + 1]
        }
    }
};

console.log(maxProduct(nums))