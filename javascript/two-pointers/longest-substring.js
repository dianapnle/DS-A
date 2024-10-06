class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let l = 0;
        let res = 0;

         //r is the right pointer
        for (let r = 0; r < s.length; r++) {
            //while s[r] is already in the character set, aka a duplicate, update the window
            while(charSet.has(s[r])) {
                //remove the left character and update l pointer until duplicate is gone
                charSet.delete(s[l])
                l++
            }
            charSet.add(s[r])
            res = Math.max(res, r - l + 1)
        }
        return res
    }
}

//time is O(n) memory is O(1)
