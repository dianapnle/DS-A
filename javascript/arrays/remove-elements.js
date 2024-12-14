/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //loop through the array of nums and compare to val
    //two pointers
    //both points start from beginning, one reads one writes
     let j = 0;
     for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            //if it does not equal val, rewrite the val at current pointer writer pointer j
            nums[j] = nums[i];
            //increment j
            j++
        }
     }
     //would be at the index which is the length of the res array
     console.log(j)
     return j;
};
