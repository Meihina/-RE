// leetcode 206. 反转链表  难度简单

var reverseList = function(head) {
    let prevNext = null
    let current = head
    while(current != null){
        let next = current.next
        current.next = prevNext
        prevNext = current
        current = next
    }
    return prevNext
};