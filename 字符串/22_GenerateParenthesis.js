// leetcode 22. 括号生成  难度中等

// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

//递归递归递归
var generateParenthesis = function(n) {
    function g_g(record , left , right){
        if(left == 0 && right == 0){
            res.push(record)
            return
        }
        if(left > 0){
            g_g(record + '(' , left - 1 , right)
        }
        if(right > left){
            g_g(record + ')' , left , right - 1)
        }
    }

    let res = [] , record = ''
    g_g(record , n , n)
    return res
};