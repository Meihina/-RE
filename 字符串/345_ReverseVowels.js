// leetcode 345. 反转字符串中的元音字母  难度简单

// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

var reverseVowels = function(s) {
    const Vowels = ['a','i','e','o','u','A','I','E','O','U']
    let left = 0 , right = s.length - 1 , copy = s.slice().split('')
    while(left < right){
        let index = 0
        if(!Vowels.includes(s[left])){
            left++
            index++
        }
        if(!Vowels.includes(s[right])){
            right--
            index++
        }
        if(index == 0){
            copy.splice(left , 1 , s[right])
            copy.splice(right , 1 , s[left])
            left++
            right--
        }
    }
    return copy.join('')
};

