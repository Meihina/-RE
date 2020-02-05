// leetcode 18. 四数之和  难度中等

//四个数字的和不重复组合

function FourNumsum(array,sum){
    if(array.length < 4){
        return []
    }

    let result = []
    array.sort((a,b) => a - b)
    for(let i = 0;i < array.length - 3;i++){
        //查重
        if(i > 0 && array[i] == array[i-1]){
            continue
        }
        if(array[i] + array[i+1] + array[i+2] + array[i+3] > sum){
            break
        }

        for(let j = i + 1;j < array.length - 2;j++){
            //查重j
            if(j > i + 1 && array[j] == array[j-1]){
                continue
            }
            let ThirdNum = j + 1,FourthNum = array.length - 1;

            while(ThirdNum < FourthNum){
                let S = array[i] + array[j] + array[ThirdNum] + array[FourthNum]
                if(S < sum){
                    ThirdNum++
                }else if(S > sum){
                    FourthNum--
                }else{
                    result.push([array[i] , array[j] , array[ThirdNum] , array[FourthNum]])
                    ThirdNum++
                    FourthNum--

                    //跳过重复数字
                    while(array[ThirdNum] == array[ThirdNum - 1]){
                        ThirdNum++
                    }
                    while(array[FourthNum] == array[FourthNum + 1]){
                        FourthNum--
                    }
                }
            }
        }
    }
    return result
}

// console.log(FourNumsum(arr,sum))