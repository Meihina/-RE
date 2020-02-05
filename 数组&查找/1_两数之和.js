// leetcode 1. 两数之和  难度简单

var twoSum = function(nums, target) {
    let res = []
    for(var i = 0;i < nums.length;i++){
        for(var j = i + 1;j < nums.length;j++){
            if(nums[i] + nums[j] == target){
                res.push(i)
                res.push(j)
                return res
            }
        }
    }
};