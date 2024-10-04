const allTreePaths = (root) => {
    const paths = _allTreePaths(root);
    for (let path of paths) {
      path.reverse();
      //reverse does it in place
    }
    return paths;
  }

  const _allTreePaths = (root) => {
    //recursive because paths through tree is the easiest way
    //checks empty tree
    if (root === null) return [];
    //if root is a leaf and has no children, return root.val array
    if (root.left === null && root.right === null) return [[root.val]]
    let allPaths = [];

    //recursive step
    let leftPaths = _allTreePaths(root.left);
    for (let path of leftPaths) {
      //add root val at the end of the each array and reverse later
      path.push(root.val);
      allPaths.push(path)
    }
    let rightPaths = _allTreePaths(root.right)
    for (let path of rightPaths) {
      //add root val at the end of the each array
      path.push(root.val);
      allPaths.push(path)
    }

    return allPaths
  };

  //roughly O(n) cause of the subarrays which would be more than number of nodes
  //roughly O(n) space but technically its between O(n)
  //exact is O(n * log(n)) for both time and space but it is greater than O(n) and less than O(n^2)
  //by reversing later you save computational time because it is not doing it while recursing
