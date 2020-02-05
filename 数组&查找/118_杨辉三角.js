// leetcode 118. 杨辉三角  難度簡單

// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

var generate = function(numRows) {
    if(numRows == 0){
        return []
    }else if(numRows == 1){
        return [[1]]
    }

    let result = [[1],[1,1]]
    for(let i = 2;i < numRows;i++){
        let newcome = [1,1] , left = 0 , right = 1
        newcome.splice(1 , 0 , result[result.length - 1][left] + result[result.length - 1][right])
        while(right != result[result.length - 1].length - 1){
            left++
            right++
            newcome.splice(1 , 0 , result[result.length - 1][left] + result[result.length - 1][right])
        }
        result.push(newcome)
    }
    return result
};