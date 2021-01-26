const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

var longestIncreasingPath = function(matrix) {
    if(!matrix || !matrix.length) return 0;
    let max = 0;
    
    const memo = new Array(matrix.length).fill(0).map(row => new Array(matrix[0].length));
    
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            max = Math.max(max, dfs(row, col, -Infinity));
        }
    }
    
    function dfs(row, col, parent){
        if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[row].length 
           || matrix[row][col] <= parent) return 0;
        
        if(memo[row][col] !== undefined){
            return memo[row][col];
        }
        
        let maxPath = 0;
        for(let [dR, dC] of dirs){
            const maxForNode = 1 + dfs(row + dR, col + dC, matrix[row][col]);
            maxPath = Math.max(maxPath, maxForNode);
        }
        
        return memo[row][col] = maxPath;
    }
    
    return max;
};