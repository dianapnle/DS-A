const mostFrequentChar = (s) => {
    //loop through the string to make an object
    //loop through string to compare they values
    let most_freq;
    let count = {};
    let max = 0;

    for (let char of s) {
      if (!(char in count)) {
        count[char] = 0
      }
      count[char] += 1
    }


    for (let char of s) {
      if (count[char] > max) {
        max = count[char]
        most_freq = char
      }
    }
    return most_freq
  };
