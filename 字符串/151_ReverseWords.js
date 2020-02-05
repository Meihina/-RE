// leetcode 151. 翻转字符串里的单词  难度中等

//反转整个句子里单词的顺序，标点符号同单词一体

var reverseWords = function(s) {
    s = s.trim()
    return s.replace(/\s+/g,' ').split(' ').reverse().join(' ')
};