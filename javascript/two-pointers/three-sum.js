class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];

        //sort the array (a - b )sorts in ascending order first
        nums.sort((a, b) => a - b);
        //iterate over the array to get the first value
        for (let i = 0; i < nums.length; i++) {
            //if its not the first index and the value is the same as the one before it
            //carry on and continue to next iteration
            if (i > 0 && nums[i] === nums[i - 1])
            continue;

            //two sum pointers now with left one being i + 1 (one after first)
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                let threeSum =  nums[i] + nums[l] + nums[r];
                //if the sum is greater than 0 than move the right pointer down
                if (threeSum > 0) {
                    r--;
                    //if the sum is too small, increase left pointer
                } else if (threeSum < 0) {
                    l++;
                } else {
                    //means it equals 0 so push the indices into the res
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    //if found sum of 0 -> keep looking for other numbers
                    while (nums[l] == nums[l - 1] && l < r) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}

//time is O(n^2) and space is O(n)
