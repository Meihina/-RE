// leetcode 232. 用栈实现队列  难度简单
//两个栈实现一个队列

function TwostacksToQueue(){
    this.stack1 = []
    this.stack2 = []
}

//入队
TwostacksToQueue.prototype.push = function(num){
    this.stack1.push(num)
}

//出队
TwostacksToQueue.prototype.pop = function(){
    if(this.stack2.length == 0){
        while(this.stack1.length != 0){
            this.stack2.push(this.stack1.pop())
        }
    }
    if(this.stack2.length == 0){
        console.log(null)
    }else{
        console.log(this.stack2.pop())
    }
}

var p = new TwostacksToQueue()
p.push(1)
p.push(4)
p.push(6)
p.pop()
p.pop()
p.push(8)
p.push(11)
p.pop()
p.pop()