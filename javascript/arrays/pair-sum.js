// const pairSum = (numbers, targetSum) => {
//     //create a hash map of previous
//     //space = O(n) computational time O(n)

//     let previous = {};
//     //loop through list of numbers
//     for (let i in numbers) {
//       //find the complement of current number
//       let num = numbers[i]
//       let complement = targetSum - num

//       //check if complement exists in the previous hash map, if it does, return current i and complement's index
//       if (complement in previous) {
//         return [previous[complement], Number(i)]
//       }

//       //if current num doesn't already exist in previous,  add
//       if (!(num in previous)) {
//         previous[num] = Number(i)
//       }
//     }
//   };

//nested loops also  help find pairs in an array but it has O(n^2)


const pairSum = (numbers, targetSum) => {
    //create a hash map of previous
    //space = O(n) computational time O(n)

    let previous = {};
    //loop through list of numbers
    for (let i = 0; i < numbers.length; i++) {
      //find the complement of current number
      let num = numbers[i]
      let complement = targetSum - num

      //check if complement exists in the previous hash map, if it does, return current i and complement's index
      if (complement in previous) {
        return [previous[complement], i]
      }

      //if current num doesn't already exist in previous,  add
      if (!(num in previous)) {
        previous[num] = i
      }
    }
  };



  ///neetcode solution with map that is technically faster and has more features
  const twoSum = (nums, target) => {
    const map = new Map();

    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const complement = target - num;
        const sumIndex = map.get(complement);

        const isTarget = map.has(complement);
        if (isTarget) {
            return [index, sumIndex];
        }

        map.set(num, index);
    }

    return [-1, -1];
}
