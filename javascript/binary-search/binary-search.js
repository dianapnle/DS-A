class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //binary search with two pointers at each end
        //divide the array length into two and compare to the midpoint
        let l = 0
        let r = nums.length - 1;
        while (l <= r) {
           //find midpoint between r and l
           let midPoint = l + Math.floor((r - l) / 2);

           if (nums[midPoint] === target) {
            return midPoint
           } else if (nums[midPoint] > target) {
            //if greater than target, shift right pointer to the left of midPoint
            r = midPoint - 1
           } else if (nums[midPoint] < target) {
            l = midPoint + 1
           }
        }

        return - 1
    }
}
//time is O(nlogn) because dividing input length by 2 log2n space is O(n)
