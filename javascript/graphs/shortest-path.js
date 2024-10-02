const shortestPath = (edges, nodeA, nodeB) => {
    //breadth first is better because it explores al l directions evenly
    let graph = buildgraph(edges)
    let distance = 0;
    let queue = [ [nodeA, distance] ];
    //want to add to visited when its in queue so initialize with starting node
    let visited = new Set([nodeA]);

    while(queue.length !== 0) {
      //destructure
      let [node, distance] = queue.shift();
      if (node === nodeB) return distance;

      //or else keep giong and add neighbors
      for (let neighbor of graph[node]) {
        //only add neighbor if its not in visited
        if (!visited.has(neighbor)) {
        visited.add(node)
        queue.push([neighbor, distance + 1])
        }
      }
    }
    //if finished while loop and did not return yet, you can return -1 assuming it was not found
    return -1;
  };

  //build graph with edges 1st
  const buildgraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
      //iterate through each pair of edges
      const [a, b] = edge
      //if not already in the graph, initialize it in the graph with empty array
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      //if it does already exist in the graph, add to each other's  neighbor arrays
      graph[a].push(b);
      graph[b].push(a);
    }
    return graph
  }

  //linear complexity O(n)
