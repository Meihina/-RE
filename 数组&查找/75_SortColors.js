// leetcode 75. 颜色分类  難度中等

// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

var sortColors = function(nums) {
    let copy = nums.slice()
    let left = 0 , right = nums.length - 1
    for(let i = 0;i < copy.length;i++){
        if(copy[i] == 0){
            nums[left] = 0
            left += 1
        }else if(copy[i] == 2){
            nums[right] = 2
            right -= 1
        }else{
            continue
        }
    }
    let onenum = right - left + 1
    nums.splice(left , onenum)
    while(onenum > 0){
        nums.splice(left , 0 , 1)
        onenum--
    }
};