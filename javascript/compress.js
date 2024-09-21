const compress = (s) => {
    res = [];
    //two pointers
    i = 0;
    j = 0;
    //use equal to here because it will place the j into out of bounds which returns undefined (not equal to s[i]), which forces the else code block to occur
    while (j <= s.length) {
      if (s[i] === s[j]) {
        //keep incrementing j if character at j is the same as i
        j += 1
        //else is when another character has been found
      } else {
          let num = j - i;
          //handle edge case of if count is 1, simply push
          if (num === 1) {
            res.push(s[i])
          //all other cases convert the difference to a string and push the character
          } else  {
            res.push(String(num), s[i])
          }
          i = j
      }
    }
    return res.join('');
  };

  //O(n) space
  // O(n) computation

  //if you use string concatentation -> would be O(n^2) because a new string would be made to join strings together;
  //arrays improve effiency
