class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //only take the alphanumeric characters, convert to lower case, walk the string
        //1 with built in functions but this one uses more memory
        let res = "";
        for (let char of s) {
            if (this.alphaNum(char.toLowerCase())) {
                //add the char to res string and lower case it if its not a special character
                res += char.toLowerCase();
            }
        }
        return res === res.split("").reverse().join("")
    }

    alphaNum(s) {
        let alphabet = new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])
        if (alphabet.has(s)) {
            return true
        }

}



class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //only take the alphanumeric characters, convert to lower case, walk the string
        //2 with built in functions
        let res = "";
        for (let char of s) {
            if (this.alphaNum(char.toLowerCase())) {
                //add the char to res string and lower case it if its not a special character
                res += char.toLowerCase();
            }
        }
        return res === res.split("").reverse().join("")
    }

    alphaNum(s) {
        let alphabet = "abcdefhijklmnopqrstuvwxyz";
        if (alphabet.includes(s)) {
            return true
        }
        return false
    }
}