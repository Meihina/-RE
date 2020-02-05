// leetcode 9. 回文数  难度简单

// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

var isPalindrome = function(x) {
    let Strx = x + '' , left = 0 , right = Strx.length - 1
    while(left < right){
        if(Strx[left] != Strx[right]){
            return false
        }
        left++
        right--
    }
    return true
};