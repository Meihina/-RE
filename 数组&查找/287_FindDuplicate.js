// leetcode 287. 寻找重复数  难度中等

//给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

// 不能更改原数组（假设数组是只读的）。
// 只能使用额外的 O(1) 的空间。
// 时间复杂度小于 O(n2) 。
// 数组中只有一个重复的数字，但它可能不止重复出现一次。

var findDuplicate = function(nums) {
    let arr = nums.slice()
    arr.sort((a,b) => a-b)
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === arr[i-1]){
            return arr[i]
        }
    }
};