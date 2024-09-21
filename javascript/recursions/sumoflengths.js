const sumOfLengths = (strings) => {
    //base case
    if (strings.length === 0) {
      return 0
    }

    //recursive step
    return strings[0].length + sumOfLengths(strings.slice(1))
  };

  //time complexity: O(n^2) because recursion and slice which copies array
  //Space complexity: O(n^2) for each recursive call and create a copy of string array
