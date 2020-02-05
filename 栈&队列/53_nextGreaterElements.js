// leetcode 503. 下一个更大元素 II  难度中等

// 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

var nextGreaterElements = function(nums) {
    let stack = [] , arr = nums.slice() , res = []
    for(let i = 0;i < arr.length;i++){
        let Jug = arr.concat(stack) , len = res.length
        for(let j = i + 1;j < Jug.length;j++){
            if(Jug[j] > arr[i]){
                res.push(Jug[j])
                stack.push(arr[i])
                break
            }
        }
        if(len == res.length){
            res.push(-1)
            stack.push(arr[i])
        }
    }
    return res
};

nextGreaterElements([1,2,1])