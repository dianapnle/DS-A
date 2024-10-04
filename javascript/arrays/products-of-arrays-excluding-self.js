class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //grab the left numbers of the num
        let left = [];
        let leftProduct = 1;
        for (let x = 0; x < nums.length; x++) {
            //insert into the left array the left product calculated previously
            left[x] = leftProduct;
            //set the left product for next iteration
            leftProduct *= nums[x]
        }

        let result = [];
        let right = [];
        let rightProduct = 1;
        for (let y = nums.length - 1; y >= 0; y--) {
            //do the same for the right array
            right[y] = rightProduct;
            rightProduct *= nums[y]
        }

        for (let i = 0; i < left.length; i++) {
            result[i] = left[i] * right[i]
        }

    return result;
    }
}
