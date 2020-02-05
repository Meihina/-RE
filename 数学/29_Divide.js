// leetcode 29. 两数相除  难度中等

// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

// 返回被除数 dividend 除以除数 divisor 得到的商。

var divide = function(dividend, divisor) {
    let res = 1 , d1 = Math.abs(dividend) , d2 = Math.abs(divisor) , d3 = Math.abs(divisor) , INT_MAX = 2147483647
    if(d1 < d2){return 0}
    while(d1 >= d2 + d2){
        d2 += d2
        res += res
    }
    d1 -= d2
    while(d1 >= d3){
        d1 -= d3
        res += 1
    }
    if((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)){
        res = -res
    }
    return res > INT_MAX ? INT_MAX : res
};