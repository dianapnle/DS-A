const sumNumbersRecursive = (numbers) => {
    let sum = 0;
    //base case: when given the smallest array (empty), sum would be 0
    if (numbers.length === 0) {
      return 0
    }
    //recursive step:
    return sum += numbers[0] + sumNumbersRecursive(numbers.slice(1))
  };

  //total time complexity = O(n^2) array slicing O(n) in each function call of O(n)
  //space complexity = O(n^2) array slicing O(n) in each function call of O(n)


const sumNumbersRecursiveImproved = (numbers) => {
    //base case: when given the smallest array (empty), sum would be 0
    if (numbers.length === 0) {
      return 0
    }
    //recursive step:
    return numbers[0] + sumNumbersRecursive(numbers.slice(1))
  };

  //total time complexity = O(n^2) array slicing O(n) in each function call of O(n)
  //space complexity = O(n^2) array slicing O(n) in each function call of O(n)
