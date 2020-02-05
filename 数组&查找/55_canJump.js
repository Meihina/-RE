// leetcode 55. 跳跃游戏  難度中等

// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。

var canJump = function(nums) {
    let MaxRange = 0
    for(let i = 0;i < nums.length;i++){
        if(i > MaxRange){
            return false
        }else if(MaxRange >= nums.length - 1){
            return true
        }else{
            MaxRange = Math.max(MaxRange , i + nums[i])
        }
    }
};