// 剑指Offer

// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这五张牌是不是连续的，2~10为数字本身，A为1，J为11，Q为12，K为13，而大小王可以看成任意数字。
// PS : 出题者不会德扑，没有考虑A的情况，导致皇家同花顺不能胡，明显不科学，故添加存在A的情况

//转变为数字
function CardChangeer(card){
    if(card == 'J'){
        return 11
    }else if(card == 'Q'){
        return 12
    }else if(card == 'K'){O
        return 13
    }else if(card == 'Joker'){
        return 0
    }
}

//主判断
function Jug(arr){
    let JokerNum = 0
    let SpaceNum = 0
    arr.sort((a,b) => a - b)
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == 0){
            JokerNum += 1
        }else if(i != 0 && arr[i-1] != 0){
            space = arr[i] - arr[i-1] - 1
            SpaceNum += space
        }
    }

    if(JokerNum >= SpaceNum){
        return true
    }
}

function Straight(arr){
    let _arr = arr + ''
    arr.sort()
    for (let i = 0;i < arr.length;i++){
        if(arr[i] == arr[i-1] && arr[i] != 'Joker'){
            console.log(_arr + ' 不可以组成顺子')
            return false
        }
        if(!parseInt(arr[i])){
            if(arr[i] == 'A'){
                arr.splice(i,1)
                i--
            }else{
                arr[i] = CardChangeer(arr[i])
            }
        }
    }

    //包含A的情况
    if(_arr.includes("A")){
        let [type1,type2] = [arr.slice(),arr.slice()]
        //A可以看作1或者14
        type1.push(1)
        type2.push(14)
        if(Jug(type1) || Jug(type2)){
            console.log(_arr + ' 可以组成顺子')
        }else{
            console.log(_arr + ' 不可以组成顺子')
        }
    //不包含A的情况
    }else{
        if(Jug(arr)){
            console.log(_arr + ' 可以组成顺子')
        }else{
            console.log(_arr + ' 不可以组成顺子')
        }
    }
}


const arr1 = [5,6,'A','K','Joker']
const arr2 = [3,4,7,'Joker','Joker']
const arr3 = ['Joker',9,10,'J','Q']
const arr4 = ['A','K','Q','J',10]
const arr5 = ['A','A','Q','J',10]
Straight(arr1)
Straight(arr2)
Straight(arr3)
Straight(arr4)
Straight(arr5)