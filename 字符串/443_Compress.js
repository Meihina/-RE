// leetcode 443. 压缩字符串  难度简单

// 给定一组字符，使用原地算法将其压缩。
// 压缩后的长度必须始终小于或等于原数组长度。
// 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。
// 在完成原地修改输入数组后，返回数组的新长度。

// PS：默认排序 , 傻逼题

var compress = function(chars) {
    let current = '' , num = 0 , arr = chars.slice()
    for(let i = 0;i < arr.length + 1;i++){
        if(arr[i] != current){
            if(num == 1){
                chars.shift()
                chars.push(current)
            }else if(current != ''){
                let add = (current + num).split('')
                chars.splice(0 , num)
                while(add.length > 0){
                    chars.push(add.shift())
                }
            }
            current = arr[i]
            num = 1
        }else{
            num += 1
        }
    }
    return chars.length
};