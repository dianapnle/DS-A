const largestComponent = (graph) => {
    let max = 0;
    let visited = new Set();
    //iterate over diff connected components
    for (let node in graph) {
      let size = explore(graph, node, visited)
      if (size > max) max = size
    }
    return max;
  };

  //O(e) time and O(n) space

  //iterate through the neighbors of a node with depth
  const explore = (graph, node, visited) => {
    let count = 0;
    if (visited.has(node)) return 0;

    visited.add(node)
    //count the current node and through recursions will count each
    let size = 1;
    for (let neighbor of graph[node]) {
      size += explore(graph, neighbor, visited)
    }
    return size;
  }

  //time is O(e) space is O(n)
