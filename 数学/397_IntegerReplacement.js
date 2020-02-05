// leetcode 397. 整数替换  难度中等

// 给定一个正整数 n，你可以做如下操作：
// 1. 如果 n 是偶数，则用 n / 2替换 n。
// 2. 如果 n 是奇数，则可以用 n + 1或n - 1替换 n。
// n 变为 1 所需的最小替换次数是多少？


var integerReplacement = function(n) {
    let count = 0
    while(n != 1){
        if(n % 2 == 0){
            n /= 2
            count++
        }else if(n == 3){
            count += 2
            break
        }else{
            if(((n+1)/2)%2 == 0){  // 若加一后除以2，还可以被2整除，就加一，否则减一
                n += 1
                count++
            }else{
                n -= 1
                count++
            }
        }
    }
    return count
};