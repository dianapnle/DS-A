class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  const breadthFirstValues = (root) => {
    // travel across before going deeper
    //queue -> first in first out
    let res = [];
    let queue = [root];

    if (root === null) return []

    while(queue.length !== 0) {
      //take out the first value off the queue w/ shift which removes the first val
      let current = queue.shift();
      res.push(current.val);


      //add items into queue
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return res;
  };

//time O(n^2) and space O(n) -> time can be O(n) assuming time is efficient where one leaves and one enters but technically time
//is O(n^2) because shift is O(n) and js does not have a native queu data structure that is maxmially efficient
