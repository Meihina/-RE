// leetcode 162. 寻找峰值  难度中等

// 峰值元素是指其值大于左右相邻值的元素。
// 给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。
// 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
// 你可以假设 nums[-1] = nums[n] = -∞。

// 二分迭代
var findPeakElement = function(nums) {
    let left = 0 , right = nums.length - 1
    while(nums.length > 2){
        let midden = Math.round((nums.length - 1) / 2)
        if(nums[midden] > nums[midden + 1]){
            let delnum = nums.length - 1 - midden
            nums.splice(midden + 1,delnum)
            right -= delnum
        }else{
            nums.splice(0,midden + 1)
            left += midden + 1
        }
    }
    if(nums.length == 2){
        if(Math.max(nums[0] ,nums[1]) == nums[0]){
            return left
        }else{
            return right
        }
    }else{
        return left
    }
};

console.log(findPeakElement([1,2,3,4,5,6,1]))

