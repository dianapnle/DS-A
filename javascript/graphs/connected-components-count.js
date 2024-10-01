const connectedComponentsCount = (graph) => {
  let count = 0;
  let visited = new Set();
  //increment count by 1 when completing a traversal

  //hop to diff connectedComponents
  //it is in graph because iterating over a js object
  for (let node in graph) {
    if (explore(graph, node, visited) === true) count += 1
  }
  return count;
};


//depth traversal or breadth traveral as far as possible or recursive
const explore = (graph, current, visited) => {
  //visited to prevent cycles
  if (visited.has(String(current))) {
    return false;
  };
  visited.add(String(current))
  //iterate through every neighbor
  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
//return true here because assuming if it gets here you have explored all neighbors possible
  return true;
}

//time is O(e) and space is O(n)
