var numIslands = function(grid) {
    if(grid === [] || !grid.length) return 0;
    
    let numIslands = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === "1"){
                numIslands += dfs(grid, i, j);
            }
        }
    }
    
    return numIslands;
};

const dfs = (grid, i, j) => {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0"){
        return 0;
    } 
    
    grid[i][j] = "0";
    
    //Check the neighbors
    dfs(grid, i + 1, j); //move down one
    dfs(grid, i - 1, j); //move up one
    dfs(grid, i, j + 1); //to the right
    dfs(grid, i , j - 1); //to the left
    
    //Account for the original island we are accounting for
    return 1;
}