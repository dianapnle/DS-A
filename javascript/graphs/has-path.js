//recursively

const hasPathRecursive = (graph, src, dst) => {
    if (src === dst) return true

    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst)) return true
    }
    return false
}

//time = O(n^2) and space = O(n)


const hasPathBreadth = (graph, src, dst) => {
      //breadth iterative
  let queue = [ src ];
  while (queue.length !== 0) {
    let current = queue.shift();
    if (current === dst) return true;

    //add neighbors of current node if no path yet
    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
  return false
}
//depth iterative is pop instead of shift

