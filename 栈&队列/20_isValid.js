// leetcode 20. 有效的括号  难度简单

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

var isValid = function(s) {
    let data = {
        '(':')',
        '{':'}',
        '[':']'
    }
    let stack = []
    for(let i = 0;i < s.length;i++){
        if(s[i] in data){
            stack.push(s[i])
        }else{
            if(data[stack[stack.length - 1]] == s[i]){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length == 0 ? true : false
};