const uncompress = (s) => {
    let numbers = "0123456789";
    let res = "";
    let i = 0;
    let j = 0;

    //check if the jth character is a number
    while(j < s.length) {
      if (numbers.includes(s[j])) {
      //check if its a number
        j += 1
      } else {
        //when current character is not a number so end of number/
        //slice does not up to and not including j
        const num = Number(s.slice(i, j));
        //the for loop gives the number of iterations character j that follows the number is repeated
        for (let count = 0; count < num; count += 1) {
          res += s[j]
        }
        //now update counters after going through a pair of number and character
        j += 1;
        i = j
      }
    }

    return res;
  };

  //both space and time are O(nm) where n is number of groups and m is the maximum number associated with any particular group
//string concatinatoin line 18 is actually O(n) because in js, strings are immutable so it is being copied and return a new string, so to improve effiency, can use array instead:


const uncompressimproved = (s) => {
    let numbers = "0123456789";
    let res = [];
    let i = 0;
    let j = 0;

    //check if the jth character is a number
    while(j < s.length) {
      if (numbers.includes(s[j])) {
      //check if its a number
        j += 1
      } else {
        //when current character is not a number so end of number/
        //slice does not up to and not including j
        const num = Number(s.slice(i, j));

        //the for loop gives the number of iterations character j that follows the number is repeated
        for (let count = 0; count < num; count += 1) {
          res.push(s[j])
        }
        //now update counters after going through a pair of number and character
        j += 1;
        i = j
      }
    }
    return res.join('');
  };

  //join is another O(n) operation but it is improved because it is not nested in the while loop

console.log(uncompressimproved("2c3a1t")); // -> 'ccaaat'
