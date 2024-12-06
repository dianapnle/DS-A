/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //only have space in between words
    //split at each space
    //reverse
    let res = [];
    let split = s.split(" ");

    for (let i = split.length - 1; i >= 0; i--) {
        //checks if the string is not an empty string. This will filter out:
        // Empty strings
        // Strings containing only whitespace (spaces, tabs, etc.)
        if (split[i] !== "") {
            res.push(split[i]);
        }
    }

    return res.join(" ")
};

//O(n) time and space
