const fiveSort = (nums) => {
    //in-place mutation
    //two pointers, on each end of array
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
      //decrement j until it is not a 5
      if (nums[j] === 5) {
        j -= 1
      } else if (nums[i] === 5) {
      //if num at i is a 5, swap with j
        [ nums[i], nums[j] ] = [ nums[j], nums[i] ]
        i += 1
      //the else case here is if the i is NOT a 5, keep incrementing
      } else {
        i += 1
      }
    }
    return nums;
  };

  //time O(n) because two pointers increase and decrease closer together
  //space: O(1) because no new array is made
