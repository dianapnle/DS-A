var gcdOfStrings = function(str1, str2) {
    //use smaller string and checking it
    let m = str1.length;
    let n = str2.length;

    let isDivisor = function(length) {
        //check if length is a factor of both strings
        //if its not a factor of the string, return false immediately (modulo is NOT 0)
        if (m % length !== 0 || n % length !== 0) {
            return false
        }
        //take the lengths of both strings and divide by the length to get the factors
        let f1 = m / length;
        let f2 = n / length;
        //check if the factors add up to each string respectively
        console.log( f1)
        return str1.slice(0, length).repeat(f1) === str1 && str1.slice(0, length).repeat(f2) === str2
    }

    //want to start at the end of the smallest one and iterate backwards to find the largest substring
    for (let i = Math.min(m, n); i >= 0; i--) {
        //helper function because if result has to be a divisor of str1 and str2, arbitrarily use str1 but can use either
        if (isDivisor(i)) {
            return str1.slice(0, i)
        }
    }
    return ""
};


//time complexity is O(n)
