// 剑指Offer

// 递增数列中寻找某个加和的配对

function FindNumbersWithSum(array,sum){
    let leftNum = 0
    let rightNum = array.length - 1
    let result = []
    while(leftNum < rightNum){
        if(array[leftNum] + array[rightNum] < sum){
            leftNum += 1
        }else if(array[leftNum] + array[rightNum] > sum){
            rightNum -= 1
        }else{
            result.push([array[leftNum],array[rightNum]])
            leftNum += 1
        }
    }

    //如果有多个结果返回最大最小
    if(result.length > 1){
        let [Minresult,Maxresult] = [null,null]
        let [Min,Max] = [null,null]
        result.map((item) => {
            let S = item[0]*item[1]
                if(Min == null && Max == null){
                    [Min,Max] = [S,S]
                    Minresult = item
                    Maxresult = item
                }else if(S > Max){
                    Max = S
                    Maxresult = item
                }else if(S < Min){
                    Min = S
                    Minresult = item
                }
        })
        result = [Minresult,Maxresult]
    }
    return result
}