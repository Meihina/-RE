// leetcode 829. 连续整数求和  难度困难 (超时)

// 给定一个正整数 N，试求有多少组连续正整数满足所有数字之和为 N?
// 说明: 1 <= N <= 10 ^ 9

var consecutiveNumbersSum = function(N) {
    let arr = [1,2]
    let Max = 2
    let Min = 1
    let S = 3
    let result = 1  //其本身
    while(Max < N){
        while(S < N && Max < N){
            arr.push(++Max)
            S += Max
        }
        while(S > N && Min < Max){
            arr.shift()
            S -= Min++
        }
        while(S == N){
            if(arr.length != 1){
                result++
            }
            arr.push(++Max)
            S += Max
        }
    }
    return result
};