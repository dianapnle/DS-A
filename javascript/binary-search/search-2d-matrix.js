class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        //matrix is sorted
        let top = 0;
        let bot = matrix.length - 1
        let lastCol = matrix[0].length - 1;

        //do binary search to figure out which row to search
        //if midRow[0] aka first value of the midrow is < target and the last integer is > target midRow[-1], then the target potentially is in this row, break the loop
        //if midRow[0] aka first value of the mid row is > target, move bottom pointer up (subtract 1)
        //if midRow[-1] aka last value of mid row is < target, move top down + 1
        while (top <= bot) {
            let mid = Math.floor((top + bot) / 2);
            if (matrix[mid][0] > target) {
                //move the bottom row up
                bot = mid - 1
            } else if (matrix[mid][lastCol] < target) {
                top = mid + 1
            } else if (matrix[mid][0] <= target && matrix[mid][lastCol] >= target) {
                break
                //break the while loop
            }
        }

        //the top and bot passed each other it must not exist
        if ((top <= bot) === false) {
            return false
        }

        //after the prev while loop should be in the row to look for target
        //now do binary search in the row calculated by the adjusted top and bottom pointers
        let row = Math.floor((top + bot) / 2)
        let l = 0;
        let r = lastCol;

        while (l <= r) {
        //find each loop because midPoint between r and l will change as pointers move
        let midPoint = Math.floor((l + r) / 2);

            if (matrix[row][midPoint] > target) {
                r = midPoint - 1
            } else if (matrix[row][midPoint] < target) {
                l = midPoint + 1
            } else if (matrix[row][midPoint] === target) {
                return true
            }
        }
        return false
    }
}



//Time complexity: O(log(m) + log(n))

// Space complexity: O(1)
