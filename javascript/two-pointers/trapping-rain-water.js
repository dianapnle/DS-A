class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        //edge case if there is no input
        if (!height || height.length === 0) return 0;

        let l = 0;
        let r = height.length - 1;

        let leftMax = height[l];
        let rightMax = height[r];
        let res = 0;

        while (l < r) {
            if (leftMax < rightMax) {
                //move pointer to the right if less than rightMax
                l++
                //update left max comparing previous max with current height
                leftMax = Math.max(height[l], leftMax);
                res += leftMax - height[l]
            } else if (rightMax <= leftMax) {
                //move pointer down if less than or equal to
                r--;
                rightMax = Math.max(height[r], rightMax);
                res += rightMax - height[r]
            }
        }
        return res;
    }
}
