// leetcode 62. 不同路径  难度中等

// //一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能  *向下或者向右*  移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 问总共有多少条不同的路径？

var uniquePaths = function(m, n) {
    let dp = new Array(n)
    for(let i = 0;i < n;i++){
        dp[i] = new Array(m)
    }
    for(let i = 0;i < n;i++){
        for(let j = 0;j < m;j++){
            if(i == 0 || j == 0){
                dp[i][j] = 1
            }else{
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
            }
        }
    }
    return dp[n - 1][m - 1]
};