// 剑指Offer

// 查找第一个只出现一次的字符

function FirstNotRepeatingChar(str){
    if(!str){
        return -1
    }

    let arr = str.split('')
    let database = {}
    for(let i = 0;i < arr.length;i++){
        if(!database[arr[i]]){
            database[arr[i]] = 1
        }else{
            database[arr[i]] += 1
        }
    }

    for(let j = 0;j < arr.length ;j++){
        if(database[arr[j]] == 1){
            return arr[j]
        }
    }
}