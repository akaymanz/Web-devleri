/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let shift = 0;
    for (let i=1; i<nums.length-shift; i++) {
       if (shift) { nums[i] = nums[i+shift];}
       if (nums[i-1]==nums[i]) {
           while (i+shift+1<nums.length && nums[i+shift+1] == nums[i])
               shift++;
       }
    }
    return nums.length-shift;
};