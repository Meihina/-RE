// leetcode 49. 字母异位词分组  难度中等

// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。


var groupAnagrams = function(strs) {
    let res = [] , type = []
    for(let i = 0;i < strs.length;i++){
        let copy = strs[i].slice().split('').sort().join('')
        if(!type.includes(copy)){
            type.push(copy)
            res.push([strs[i]])
        }else{
            let index = type.indexOf(copy)
            res[index].push(strs[i])
        }
    }
    return res
};