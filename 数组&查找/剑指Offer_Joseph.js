// 剑指Offer

// 约瑟夫环问题
// 0,1,...,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字

function Josephus(n,m){
    if(!n || !m){
        return false
    }
    let circleArr = []
    for(let i = 0;i < n;i++){
        circleArr.push(i)
    }
    let kill = 0
    while(circleArr.length > 1){
        kill = (kill + m) % circleArr.length - 1
        if(kill == -1){
            circleArr.splice(circleArr.length - 1,1)
            kill = 0
        }else{
            circleArr.splice(kill,1)
        }
    }
    return circleArr[0]
}