class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //set two pointers
        let max = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            let containerLength = r - l;

            let area = (containerLength) * Math.min(heights[l], heights[r]);
            max = Math.max(max, area)

            if (heights[l] < heights[r]) {
                //shift the left pointer if less than the right
                l ++
            } else if (heights[l] > heights[r]) {
                //shift the right pointer if less than the left
                r--;
            } else {
                //edge case if they are equal just shift either or here right
                r--
            }
        }
        return max
    }
}
//O(n) time and O(1) memory
