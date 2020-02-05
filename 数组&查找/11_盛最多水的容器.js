// leetcode 11. 盛最多水的容器  難度中等

// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

var maxArea = function(height) {
    let left = 0 , right = height.length - 1 , result = 0
    while(left <　right){
        if(height[left] < height[right]){
            result = Math.max(result , height[left] * (right - left))
            left += 1
        }else{
            result = Math.max(result , height[right] * (right - left))
            right -= 1
        }
    }
    return result
};