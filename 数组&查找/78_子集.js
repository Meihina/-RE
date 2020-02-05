// leetcode 78. 子集  难度中等

// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。

var subsets = function(nums) {
    let res = []
    function set(array , len){
        res.push(array)
        for(let i = len;i < nums.length;i++){
            array.push(nums[i])
            set(array.slice() , i + 1)
            array.pop()
        } 
    }
    set([] , 0)
    return res
};