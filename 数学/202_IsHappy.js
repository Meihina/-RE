// leetcode 202. 快乐数  难度简单

// 编写一个算法来判断一个数是不是“快乐数”。

// 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

// 借鉴快慢指针法
var isHappy = function(n) {
    function SQsum(n){
        let sum = 0
        while(n > 0){
            let SQnum = n % 10
            sum += SQnum * SQnum
            n = Math.floor(n / 10)
        }
        return sum
    }

    function docur(slow , fast){
        slow = SQsum(slow)
        fast = SQsum(fast)
        fast = SQsum(fast)
        return [slow , fast]
    }

    let [slow , fast] = docur(n , n)
    while(slow != fast){
        [slow , fast] = docur(slow , fast)
    }
    return fast == 1
};