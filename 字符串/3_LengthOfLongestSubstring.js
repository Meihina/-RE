// leetcode 3. 无重复字符的最长子串  难度中等

// 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度
function LengthOfLongestSubstring(s){
    let maxlength = 0
    let temp = []
    for(let i = 0;i < s.length;i++){
        if(temp.includes(s[i])){
            if(maxlength < temp.length){
                maxlength = temp.length
                temp.push(s[i])
                temp.splice(0,temp.indexOf(s[i]) + 1)
            }else{
                temp.push(s[i])
                temp.splice(0,temp.indexOf(s[i]) + 1)
            }
        }else{
            temp.push(s[i])
        }
    }
    if(maxlength < temp.length){maxlength = temp.length}
    return maxlength
}
