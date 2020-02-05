// leetcode . 电话号码的字母组合  难度中等

//给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
//给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

function LetterCombinations(digits){
    let constitute = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'], 
        '8':['t','u','v'], 
        '9':['w','x','y','z']
    }
    let temp = ''
    let stand = 0 //表示输入字符循环的当前下标
    let result = []
    deal(result,temp,constitute,digits,stand)
    return result
}

function deal(result,temp,constitute,digits,stand){
    if(digits.length == 0){
        return
    }

    for(let j = 0;j < constitute[digits[stand]].length;j++){
        temp += constitute[digits[stand]][j]
        if(temp.length == digits.length){
            result.push(temp)
        }
        if(stand < digits.length - 1){deal(result,temp,constitute,digits,stand + 1)}  //若当前下标还不是最末尾，递归
        temp = temp.substring(0, temp.length - 1)  //拼接完结果后，干掉最后一个字符
    }
}

console.log(LetterCombinations('2347'))