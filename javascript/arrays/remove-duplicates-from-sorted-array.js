/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //compare two index pointers - when the left and right one point to different numbers -> first time seeing that number
    //insert index is where i should put that new number, then update insert index and looping variable to the right by one
    //if they are the same, just incremement i, no need to replace insert index

    if (nums.length === 0) {
        return 0;
    }

    let insertIndex = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i-1]) {
            //if it is diff then replace the nums at insert index with the current nums
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }
    //the insert index should be the number of unique elements
    return insertIndex;
};

//time is O(n) space is O(1)
//Time Complexity: O(N), since we only have 2 pointers, and both the pointers will traverse the array at most once.

// Space Complexity: O(1), since we are not using any extra space.
