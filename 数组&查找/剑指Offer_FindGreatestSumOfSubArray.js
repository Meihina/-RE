// 剑指Offer

// 输入一个整数数组，整数里面有正数也有负数。数组中的一个或者连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为O(n)。

function FindGreatestSumOfSubArray(array){
    let sum = array[0]
    let first = 0
    let result = {
        'max':0,
        'maxarray':[array[0]]
    }

    for(let i = 1;i < array.length ;i++){
        if(sum < 0){
            sum = array[i]
            first = i
        }else{
            sum = sum + array[i]
        }
        if(sum > result.max){
            result.max = sum
            result.maxarray = array.slice(first,i+1)
        }
    }
    
    return result
}