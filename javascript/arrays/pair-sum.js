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
