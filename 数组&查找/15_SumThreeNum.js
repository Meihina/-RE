// leetcode 15. 三数之和  难度中等

// 找出数组中和为sum的三个数字不重复的组合
// 原为sum = 0时

function ThreeNumsum(array,sum){
    if(array.length < 3){
        return []
    }

    array.sort((a,b) => a - b) //递增数列
    for(let i = 0;i < array.length - 2;i++){
        if(array[i] === array[i - 1]){
            continue;
        }
        let SecondNum = i + 1
        let ThirdNum = array.length - 1
        let result = []
        while(SecondNum < ThirdNum){
            let S = array[i] + array[SecondNum] + array[ThirdNum]
            if(S < sum){
                SecondNum++
            }else if(S > sum){
                ThirdNum--
            }else{
                result.push([array[i] , array[SecondNum] , array[ThirdNum]])
                SecondNum++
                ThirdNum--

                //跳过重复数字
                while(array[SecondNum] == array[SecondNum - 1]){
                    SecondNum++
                }
                while(array[ThirdNum] == array[ThirdNum + 1]){
                    ThirdNum--
                }
            }
        }
    }
    return result
}