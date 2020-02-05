// 剑指Offer

// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含质因子7。
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。


function Uglynum(index){
    if(index <= 0){return false}

    let uglyArr = [1]
    let [ugly2,ugly3,ugly5] = [0,0,0]
    let uglyIndex = 1
    while(uglyIndex < index){
        //丑数只能是某个丑数乘以2，3，5得到的
        uglyArr.push(Math.min(uglyArr[ugly2] * 2,uglyArr[ugly3] * 3,uglyArr[ugly5] * 5))
        //如果某个基丑数乘以丑因子比当前最大丑数小，换下一位基丑数
        while(uglyArr[ugly2] * 2 <= uglyArr[uglyArr.length - 1]){
            ugly2++
        }
        while(uglyArr[ugly3] * 3 <= uglyArr[uglyArr.length - 1]){
            ugly3++
        }
        while(uglyArr[ugly5] * 5 <= uglyArr[uglyArr.length - 1]){
            ugly5++
        }
        uglyIndex++
    }
    return uglyArr[uglyArr.length - 1]
}

console.log(Uglynum(5))