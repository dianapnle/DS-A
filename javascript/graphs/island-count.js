const islandCount = (grid) => {
    //iterative part
    let visited = new Set();
    //increment by 1 when completing a traversal
    let count = 0;
    //hop to different connected components
    for (let r = 0; r < grid.length; r+= 1) {
      //in case the grid is not symmetric, use column length
      for (let c = 0; c < grid[0].length; c += 1) {
        if (explore(grid, r, c, visited) === true) {
          count += 1;
        }
      }
    }
    return count;
  };

  const explore = (grid, r, c, visited) => {
    //needs to be out of bounds, needs to be first
    let rowInBounds = 0 <= r && r < grid.length;
    let colInBounds = 0 <= c && c < grid[0].length;
    if (!rowInBounds || !colInBounds) return false;

    if (grid[r][c] === "W") return false;

    //prevent cycles, store as string since primitive, arrays dont work
    let position = r + ',' + c;
    if (visited.has(position)) return false;
    visited.add(position);

    //if it gets here then must be in unvisited land
    //lower row numbers mean upward, and lower columns mean left
    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
  }
//time and space is O(rc)
