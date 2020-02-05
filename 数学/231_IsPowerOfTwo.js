// leetcode 231. 2的幂  难度简单

// 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

var isPowerOfTwo = function(n) {
    if(n <= 0){
        return false
    }
    while(n > 1){
        if(n % 2 != 0){
            return false
        }else{
            n = n / 2
        }
    }
    return true
};