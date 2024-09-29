//recursionfirst
//make an edge list into an adjacency list first

const buildGraph = (edges) =>  {
    const graph = {};

    for (let edge of edges) {
      ///each edge is a pair
      const [ a, b] = edge;
      //if not already in the graph, initialize it in the graph and use as key
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      //if it does exist in the graph
      //since its undirected, a and be should be in each other's neighbors
      graph[a].push(b);
      graph[b].push(a);
    }
    return graph
  }



const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  //if has already been visited to avoid cycles and infinite loops
  //return false so no need to travel through that node
  if (visited.has(src)) return false;
  visited.add(src)

  for (let neighbor in graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true
    }
  }
  return false
}

//time is O(e) which is also like O(n^2) because edges go both ways in undirected
//space is O(n)
