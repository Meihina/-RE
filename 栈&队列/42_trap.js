// leetcode 42. 接雨水  难度困难

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 输入: [3,2,1,1,0,2,3,0,2,1,0,1,3,2,1,2,1]
// 输出: 6
// [2,1,1,0,2]

var trap = function(height) {
    let Indexstack = [] , result = 0
    for(let i = 0;i < height.length;i++){
        if(Indexstack[0] != undefined){
            while(height[Indexstack[Indexstack.length - 1]] < height[i]){
                let temp = Indexstack.pop(),
                    H = Math.min(height[i],height[Indexstack[Indexstack.length - 1]]) - height[temp],
                    W = i - Indexstack[Indexstack.length - 1] - 1
                if(Indexstack[0] == undefined){
                    break
                }
                result += H * W
            }
        }
        Indexstack.push(i)
    }
    return result
};

