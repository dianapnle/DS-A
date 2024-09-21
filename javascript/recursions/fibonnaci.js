const fibonacci = (n) => {
    // base case
    //add prev 2 numbers to give the next
    if (n <= 1) {
      return n
    }
    return fibonacci(n - 1) + fibonacci (n - 2)
  };


//space complexity : O(n) height of recursion tree
//time complexity : O (2^n) exponential
