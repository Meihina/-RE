// leetcode 905. 按奇偶排序数组  难度简单

// 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
// 你可以返回满足此条件的任何数组作为答案。

var sortArrayByParity = function(A) {
    let first = 0
    let last = A.length - 1
    while(first < last){
        while(A[first] % 2 == 0){
            first += 1
        }
        while(A[last] % 2 == 1){
            last -= 1
        }
        if (first < last) {
            [A[first],A[last]] = [A[last],A[first]]
        }
    }
    return A
};