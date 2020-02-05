// leetcode 155. 最小栈  难度简单

//包含min函数的栈

var Data = []
var Min = []
var arr = [10,11,4,5,66,2,3,2,4,3,4,1]

function PushIn(num){
    Data.push(num)
    if(Min.length == 0 || num < min()){
        Min.push(num)
    }else{
        Min.push(min())
    }
}

function min(){
    return Min[Min.length - 1]
}

function Datatop(){
    return Data[Data.length - 1]
}

function pop(){
    Min.pop()
    Data.pop()
}

for(let i = 0;i < arr.length;i++){
    PushIn(arr[i])
}

console.log(Data , Min , Datatop() , min())
pop()
console.log(Data , Min , Datatop() , min())
