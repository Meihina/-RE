// leetcode 520. 检测大写字母  难度简单

// 给定一个单词，你需要判断单词的大写使用是否正确。

// 我们定义，在以下情况时，单词的大写用法是正确的：

// 全部字母都是大写，比如"USA"。
// 单词中所有字母都不是大写，比如"leetcode"。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
// 否则，我们定义这个单词没有正确使用大写字母。

var detectCapitalUse = function(word) {
    if(word[0].match(/^.*[A-Z]+.*$/)){
        if(word.match(/[a-z]/g) && word.match(/[a-z]/g).length == word.length - 1){
            return true
        }else if(word.match(/[A-Z]/g) && word.match(/[A-Z]/g).length == word.length){
            return true
        }else{
            return false
        }
    }else{
        if(word.match(/[a-z]/g).length == word.length){
            return true
        }else{
            return false
        }
    }
};