// leetcode 456. 132模式  难度中等

// 给定一个整数序列：a1, a2, ..., an，一个132模式的子序列 ai, aj, ak 被定义为：当 i < j < k 时，ai < ak < aj。设计一个算法，当给定有 n 个数字的序列时，验证这个序列中是否含有132模式的子序列。

// 注意：n 的值小于15000。

var find132pattern = function(nums) {
    for(let i = 0;i < nums.length;i++){
        if(i == 0 || i == nums.length - 1){
            continue
        }
        let min = []
        for(let j = 0;j < i;j++){
            if(min.length == 0){
                min.push(nums[j])
                continue
            }
            if(nums[j] < min[min.length - 1]){
                min.push(nums[j])
            }
        }
        for(let z = i + 1;z < nums.length;z++){
            if(min[min.length - 1] < nums[z] && nums[z] < nums[i]){
                return true
            }
        }
    }
    return false
};