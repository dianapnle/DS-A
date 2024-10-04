class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let str of strs) {
            //["neet","code","love","you"] -> "4#neet5#code4#love3#you"
            res += `${str.length}#${str}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        //loop through the char of the string until you reach #
        let i = 0;
        while (i < str.length) {
            //find index of hash tag starting at index i
            let pos = str.indexOf("#", i);
            let len = parseInt(str.slice(i, pos));
            //moves the i index to the char after #
            i = pos + 1;
            let s = str.slice(i, i + len);
            res.push(s);
            //now move the i over
            i += len;
        }
        return res
    }
}
