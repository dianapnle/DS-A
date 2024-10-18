var mergeAlternately = function(word1, word2) {
    //loop through each char in string starting with word1
    //take turns adding into res
    //if word1 !== 0 but word 2 is -> push the rest of word1 letters into res
    //repeat for the other
    let res = "";
    let i = 0;
    while(i < word1.length && i < word2.length) {
            res += word1[i]
            res += word2[i]
            i++
    }

    //will exit loop if word1 or word2 gets exhausted, simply push rest
    while(i < word1.length) {
        res += word1[i]
        i++
    }

    while (i < word2.length) {
        res += word2[i]
        i++
    }
    return res;
};




var mergeAlternately = function(word1, word2) {
    //take turns adding into res starting with w1
    //take the max length of the two and use it to iterate through each word
    let res = "";
    for (let i = 0; i < Math.max(word1.length, word2.length); i ++) {
        //while word1 is not exhausted yet, add word1 letters
        if (i < word1.length) res += word1[i];
        //if word2 is not exhausted yet, add word2  letters
        if (i < word2.length) res += word2[i];
    }

    //will exit loop if word1 or word2 gets exhausted, simply push rest
    return res;
};
//time is O(n)
