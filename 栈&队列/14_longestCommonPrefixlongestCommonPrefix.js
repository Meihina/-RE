// leetcode 14. 最长公共前缀  难度简单

//编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return ''
    }
    let res = ''
    for(let i = 0;i < strs[0].length;i++){
        let record = strs[0][i]
        for(let j = 1;j < strs.length;j++){
            if(strs[j][i] != record){
                return res
            }
        }
        res += record
    }
    return res
};