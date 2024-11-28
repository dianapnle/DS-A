const pairProduct = (numbers, targetProduct) => {
    // iterate through the array of numbers
      let previous = {};
      for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let complement = targetProduct / num
        if (complement in previous) {
          return [i, previous[complement]]
        }
        previous[num] = i
      }
  };

//   n = length of array
//   Time: O(n)
//   Space: O(n)


//
