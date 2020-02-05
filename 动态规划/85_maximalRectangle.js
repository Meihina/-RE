// leetcode 85. 最大矩形  難度困難

// 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

var maximalRectangle = function(matrix) {
    if(matrix.length == 0){
        return 0 
    }

    let dp = new Array(matrix.length) , result = 0
    for(let i = 0;i < matrix.length;i++){
        dp[i] = new Array(matrix[0].length)
    }

    for(let i = 0;i < dp.length;i++){
        for(let j = 0;j < dp[0].length;j++){
            if(matrix[i][j] == '1'){
                if(j == 0 || dp[i][j-1] == 0){
                    dp[i][j] = 1
                }else{
                    dp[i][j] = dp[i][j-1] + 1
                }

                let width = dp[i][j]
                for(let h = i;h >= 0;h--){
                    width = Math.min(width , dp[h][j]) , heigth = i - h + 1
                    result = Math.max(result , width * heigth)
                }
            }
            if(matrix[i][j] == '0'){
                dp[i][j] = 0
            }
        }
    }
    console.log(result)
    return result
};

maximalRectangle([["1","0","1","1","1"],["0","1","0","1","0"],["1","1","0","1","1"],["1","1","0","1","1"],["0","1","1","1","1"]])