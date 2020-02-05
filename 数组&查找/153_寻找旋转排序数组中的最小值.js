// leetcode  153. 寻找旋转排序数组中的最小值  难度中等

// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
// 请找出其中最小的元素。
// 你可以假设数组中不存在重复元素。


var findMin = function(nums) {
    let left = 0 , right = nums.length - 1 , mid = Math.round((left + right)/2)
    if(nums[left] < nums[right] || nums.length == 1){
        return nums[left]
    }
    while(left < right - 1){
        if(nums[mid] > nums[left]){
            left = mid
            mid = Math.round((left + right)/2)
        }else if(nums[mid] < nums[left]){
            right = mid
            mid = Math.round((left + right)/2)
        }
    }
    return nums[right]
};