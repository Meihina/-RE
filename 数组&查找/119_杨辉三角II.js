// leetcode 119. 杨辉三角II  難度簡單

// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

var getRow = function(rowIndex) {
    if(rowIndex == 0){
        return [1]
    }else if(rowIndex == 1){
        return [1,1]
    }
    let result = [[1],[1,1]]
    for(let i = 2;i <= rowIndex;i++){
        let newcome = [1,1] , left = 0 , right = 1
        newcome.splice(1 , 0 , result[result.length - 1][left] + result[result.length - 1][right])
        while(right != result[result.length - 1].length - 1){
            left++
            right++
            newcome.splice(1 , 0 , result[result.length - 1][left] + result[result.length - 1][right])
        }
        result.push(newcome)
    }
    return result[result.length - 1]
};