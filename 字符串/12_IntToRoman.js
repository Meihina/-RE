// leetcode 12. 整数转罗马数字  难度中等

// 哈希表
var intToRoman = function(num) {
    const Data = {  // 用 for in 遍历 会以key的大小决定先后
        1000: 'M', 900: 'CM', 
        500: 'D', 400: 'CD', 
        100: 'C', 90: 'XC', 
        50: 'L', 40: 'XL', 
        10: 'X', 9: 'IX', 
        5: 'V', 4: 'IV',
        1: 'I'
    }
    let arr = [1000,900,500,400,100,90,50,40,10,9,5,4,1] , res = ''
    for (let i of arr){
        console.log( i , Math.floor(num / i))
        if(Math.floor(num / i) != 0){
            let nums = Math.floor(num / i)
            num = num % i
            while(nums > 0){
                res += Data[i]
                nums--
            }
        }
    }
    return res
};