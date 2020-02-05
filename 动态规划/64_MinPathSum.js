// leetcode 64. 最小路径和  难度中等

// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。

var minPathSum = function(grid) {
    for(let i = 0;i < grid.length;i++){
        for(let j = 0;j < grid[0].length;j++){
            if(i == 0 && j == 0){continue}
            if(i == 0){
                grid[i][j] += grid[i][j - 1]
            }else if(j == 0){
                grid[i][j] += grid[i - 1][j]
            }else{
                grid[i][j] += Math.min(grid[i][j - 1],grid[i - 1][j])
            }
        }
    }
    return grid[grid.length - 1][grid[0].length - 1]
};