const levelAverages = (root) => {
    //breadth iterative

    let levels = [];

    if (root === null) return [];

    let queue = [{node: root, levelNum: 0}]
    while (queue.length !== 0) {
      //deconstruct the variables
      let { node, levelNum } = queue.shift();

      //if the levels length is equal to the num, then make a new subarray
      if (levels.length === levelNum) {
        levels.push([node.val])
      } else {
        levels[levelNum].push(node.val)
      }

      if (node.left !== null) queue.push({node: node.left, levelNum: levelNum + 1})
      if (node.right !== null) queue.push({node: node.right, levelNum: levelNum + 1})
    }

    // let res = [];
    // // once done with adding numbers to the subarrays respectively, find levelAverages
    // // for (let subarray of levels) {
    // //   res.push(getAvg(subarray))
    // // }

    //  return res;

    return levels.map(getAvg)
  };


  const getAvg = (array) => {
    let sum = 0;
    for (let num of array) {
      sum += num
    }
    return sum / array.length
  }


  const levelAveregesRecursive = (root) => {
    let levels = [];

    fillLevels(root, levels, 0)
  }


  const fillLevels = (root, levels, levelNum) => {
    if (root === num) return ;

    if (levels.length === levelNum) {
        levels.push([root.val])
    } else {
        levels[levelNum].push(root.val)
    }

    fillLevels(root.left, levels, levelNum + 1)
    fillLevels(root.right, levels, levelNum + 1)
  }
