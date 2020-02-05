// leetcode 225. 用队列实现栈  难度简单
//两个队列组成一个栈

function TwoQueuesTostack(){
    this.queue1 = []
    this.queue2 = []
}

TwoQueuesTostack.prototype.push = function(num){
    if(this.queue1.length == 0){
        this.queue1.push(num)
        while(this.queue2.length){
            this.queue1.push(this.queue2.shift())
        }
    }else if(this.queue2.length == 0){
        this.queue2.push(num)
        while(this.queue1.length){
            this.queue2.push(this.queue1.shift())
        }
    }
}

TwoQueuesTostack.prototype.pop = function(){
    if(this.queue2.length == 0){
        console.log(this.queue1.pop())
    }else{
        console.log(this.queue2.pop())
    }
}

var Q = new TwoQueuesTostack()
Q.push(2)
Q.push(22)
Q.push(12)
Q.push(4)
Q.push(9)
Q.pop()
Q.pop()

