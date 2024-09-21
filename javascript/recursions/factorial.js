const factorial = (n) => {
    //base case
    if (n === 0) {
      return 1
    }

    //recursive step
    return n * factorial(n - 1)
  };

//time complexity: O(n)
//space complexity: O(n) because recursive call consumes some space each time 
