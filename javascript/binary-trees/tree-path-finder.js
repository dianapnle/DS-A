  //recurssive -> not efficient

  const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];


  let leftSide = pathFinder(root.left, target);
  //check left side if its NOT null
  if (leftSide !== null) {
    return [root.val, ...leftSide]
  }
  //check right side if its NOT null
  let rightSide = pathFinder(root.right, target)
  if (rightSide !== null) {
    return [root.val, ...rightSide]
  }

  return null
};

//O(n^2) time  because of the array method which is O(n) and O(n) space
//to improve time efficiency -> use push to existing array


//-> build a helper function that reverses and reduces run time to O(n


const pathFinderImproved = (root, target) => {
    const result = pathFinderHelper(root, target);
    if (result === null) {
      return null
    } else {
      return result.reverse();
    }
  }


  const pathFinderHelper = (root, target) => {
    //edge case
    // if (root === null) return [];

    // //depth iterative
    // let path = [];
    // let stack = [root]
    // while (stack.length !== 0) {
    //    let current = stack.pop();

    // }


    //recurssive
    if (root === null) return null;
    if (root.val === target) return [root.val];


    let leftSide = pathFinderHelper(root.left, target);
    //check left side if its NOT null
    if (leftSide !== null) {
      leftSide.push(root.val)
      return leftSide;
    }
    //check right side if its NOT null
    let rightSide = pathFinderHelper(root.right, target)
    if (rightSide !== null) {
      rightSide.push(root.val)
      return rightSide;
    }

    return null
  };
