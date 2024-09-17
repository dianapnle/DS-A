const anagrams = (s1, s2) => {
    //anagrams are strings that contain the same characters bust just in a different order
    //hash  map: count of every character; keys are the char, values = count
    //unordered
    //make an object for string 1
    let count = {};
    for (let char of s1) {
      if (!(char in count)) {
        count[char] = 0
      }
      //on every iteration add +1
        count[char] += 1
    }

    //second string anagram remove
    //of gives you the value not the property key
    for (let char of s2) {
      if (count[char] === undefined) {
        return false
        //meaning the char in s2 does not exist in the object already
      } else {
        count[char] -= 1
      }
    }

    //loop through the count object and if any are NOT 0, then return false
    for (let char in count) {
      if (count[char] !== 0) {
        return false;
      }
    }
    return true
  };
