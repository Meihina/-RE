// 剑指Offer

// 找出出现次数超过数组一半的数字

function MoreThanHalf(array){
    let value = null
    let count = 0
    array.sort((a,b) => a - b)
    for(let i = 0;i < array.length + 1;i++){
        if(array[i] === array[i-1]){
            count++
            continue
        }else{
            if(value != null){
                if(count > arr.length / 2){
                    return value
                }
            }
            value = array[i]
            count = 1
        }
    }
}