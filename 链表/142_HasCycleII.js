// leetcode 142. 环形链表 II  难度中等

// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 说明：不允许修改给定的链表。

var detectCycle = function(head) {
    if(!head){
        return null
    }
    let list = []
    let current = head
    while(current.next){
        if(list.includes(current)){
            return current
        }
        list.push(current)
        current = current.next 
    }
    return null
}
