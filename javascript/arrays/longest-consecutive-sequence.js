class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //make a set of the array of given nums
        const numSet = new Set(nums);
        let longest = 0;

        //iterate through nums array
        for (const num of nums) {
            //check if the num is the start of a sequence in the set, if it is, dont do anything and move to next num
            //sets have O(1) look up time
            if (!numSet.has(num - 1)) {
                //if number does not have a left neighbor, its the start of the sequence
                let length = 0;
                //check if there are consecutive numbers after the current num in the numset, if it does, increase length by 1 each time
                while (numSet.has(num + length)) {
                    length += 1
                }
                //after exiting the loop for one sequence, take the current longest and current length and replace with largest value
                longest = Math.max(longest, length)
            }
        }
        return longest
    }
}
//time and space is O(n)
