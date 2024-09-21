const palindrome = (s) => {
    //base case
    if (s.length <= 1) {
      return true
    }

    //recursive step slicing off front and end to compare
    if (s[0] !== s[s.length - 1]) {
      return false
    }
    //slice second argument is exclusive and does not include the -1
    return palindrome(s.slice(1,-1))
  };


  //O(n^2) time and space
