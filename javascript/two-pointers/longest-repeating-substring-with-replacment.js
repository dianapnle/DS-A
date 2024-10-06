class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let res = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let len = r - l + 1;
            console.log(len)
            //initialize the char in the count to 0 or increase it
            count.set(s[r], 1 + (count.get(s[r]) || 0));

           //if the window is NOT valid //number of replacements greater than k)
            if (len - Math.max(...count.values()) > k) {
            //reduce the left pointer
            //take the count of the character at left position and decrease by 1
                count.set(s[l], count.get(s[l]) - 1);
                l++
           }
           //have to recalculate len after moving pointers
           len = r - l + 1;
           res = Math.max(res, len)
        }
    return res
    }
}
//o(n) time and memory
