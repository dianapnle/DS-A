var reverseWords = function(s) {
    let res = [];
    //split the string
    //if its space, do not include
    let string = s.split(" ")
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i]) {
            res.push(string[i])
        }
    }
    return res.join(" ")
};


