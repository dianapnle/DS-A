var reverseVowels = function(s) {
    //vowels dictionary to refer to with upper and lower
    let i = 0;
    let j = s.length - 1
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    //split the string into array and then have two pointers on each side of the string
    let string = s.split('');
    while (i < j) {
        let leftChar = string[i];
        let rightChar = string[j]
        //if the char is not a vowel, keep traversing
        if (!vowels.includes(leftChar)) {
            i++
        } else if (!vowels.includes(rightChar)) {
            j--
        } else {
            //else its a vowel, swap the vowels then move pointers
            string[i] = rightChar;
            string[j] = leftChar;
            i++
            j--
        }
    }
    return string.join("")
};

//time is O(n)
