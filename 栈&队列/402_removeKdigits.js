// leetcode 402. 移掉K位数字  难度中等

// 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

// 注意:
// num 的长度小于 10002 且 ≥ k。
// num 不会包含任何前导零。

var removeKdigits = function(num, k) {
    let stack = [] , count = 0 , arr = num.split('') , res = ''
    for(let i = 0;i < arr.length;i++){
        let N = parseInt(arr[i])
        if(stack == []){
            stack.push(N)
            res += N
            continue
        }else if(count < k && N < stack[stack.length - 1]){
            stack.pop()
            res = res.substring(0 , res.length - 1)
            count++
            i--
            continue
        }else{
            stack.push(N)
            res += N
        }
    }
    while(count < k){
        res = res.substring(0 , res.length - 1)  //尾巴还有剩，删掉
        count++
    }
    while(res[0] == '0'){
        res = res.substring(1 , res.length)  //头上有0，删掉
    }
    return res == '' ? '0' : res
};