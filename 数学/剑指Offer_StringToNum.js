// 剑指Offer

// 将一个字符串转换成一个整数,不符合时返回0  PS: 数字的字符串

// 合法输入：“123”，“+123”，“-123”，“098”
// 非法输入：“a”，“！”，NULL,(超过上下限值的字符串)

function StringToNum(s){
    if(s == undefined || s == ''){  //异常排除
        return 0
    }else if(Number.isInteger(s)){  //数返数
        return s
    }

    //开头位的判断
    let num = 0
    if(s[0] >= 0 || s[0] <= 9){
        num = s[0]
    }else if (s[0] != '-' && s[0] != '+'){
        return 0
    }

    for(let i = 1;i < s.length;i++){
        if(s[i] >= 0 || s[i] <= 9){
            num = num * 10 + (s[i] - 0)
        }else{
            return 0
        }
    }
    return s[0] == '-' ? -num : num
}