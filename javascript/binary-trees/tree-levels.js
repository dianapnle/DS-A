const treeLevelsDepthIterative = (root) => {

    if (root === null) return [];

    // iterative depth first
    let levels = []
    let stack = [ {node: root, level: 0} ]
    while (stack.length !== 0) {
      //destructure cause popping the stack would give an object
      let { node, level } = stack.pop();
      //if the length of the array is equal to the level, then push the node value
      if (levels.length === level) {
        levels.push([node.val])
        //but if it already exists, then just add to that subarray
      } else {
        levels[level].push(node.val)
      }
      if (node.right !== null) stack.push({node: node.right, level: level + 1});
      if (node.left !== null) stack.push({node: node.left, level: level + 1});
    }
    return levels;
    //time is O(n)
    //space is O(n)
  };


  const treeLevelsBreadthIterative = (root) => {
    if (root === null) return [];

    let levels = [];
    let queue = [{node: root, level: 0}];
    while (queue.length !== 0) {
      const {node, level} = queue.shift();

      if (levels.length === level) {
        levels.push([node.val]);
      } else {
        levels[level].push(node.val)
      }

      if (node.left !== null) queue.push({node: node.left, level: level + 1});
      if (node.right !== null) queue.push({node: node.right, level: level + 1});
    }
    return levels
  }

  //time is O(n^2) space is O(n)


const treeLevelsRecursive = (root) => {
    const levels = [];
    fillLevels(root, levels, 0)

    return levels;
}

  const fillLevels = (root, levels, levelNum) => {
    if (root === null) return;

    if (levels.length === levelNum) {
      levels.push([root.val]);
    } else {
      levels[levelNum].push(root.val)
    }

    fillLevels(root.left, levels, levelNum +1)
    fillLevels(root.right, levels, levelNum +1)
}
//time and space are O(n)
