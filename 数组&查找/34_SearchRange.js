// leetcode 34. 在排序数组中查找元素的第一个和最后一个位置  难度中等

// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 如果数组中不存在目标值，返回 [-1, -1]。

var searchRange = function(nums, target) {
    if(!nums.includes(target)){
        return [-1,-1]
    }else{
        let index = nums.indexOf(target)
        let res = [index]
        while(nums[index + 1] == target){
            index++
        }
        res.push(index)
        return res
    }
};