const intersection = (a, b) => {
    //make one array a set
    //inserting elements of array a into a set is O(n)
    let setA = new Set(a)
    //iterate through array b to see if it is in set a
    let intersection = [];
    for (let i = 0; i < b.length; i++) {
      //looking up items in a set is O(1)
      if (setA.has(b[i])) {
        intersection.push(b[i])
      }
    }
    return intersection
  };


  //time complexity: O(n+m) because each array is looped over once one after another
  //space complexity: O(n) because one array is converted into the result array
