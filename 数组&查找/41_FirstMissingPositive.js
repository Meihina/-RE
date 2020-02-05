// leetcode 41. 缺失的第一个正数  难度困难

// 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。

var firstMissingPositive = function(nums) {
    nums.sort((a,b) => a-b)
    if(nums.includes(1)){
        for(let i = 0;i < nums.length;i++){
            if(nums[i] > 1){
                if(nums[i] - nums[i-1] > 1){
                    return nums[i-1] + 1
                }
                if(nums[i+1] - nums[i] > 1){
                    return nums[i] + 1
                }
            }
        }
        return nums[nums.length - 1] + 1
    }else{
        return 1
    }
};