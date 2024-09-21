const reverseString = (s) => {

    //base case when there are no more characters left in string
    if (s.length === 0) {
      return ""
    }
    //recursive step
    return reverseString(s.slice(1)) + s[0]
  };

  //time complexity: O(n^2) and slice is o(n)
  //space complexity: O(n^2)
