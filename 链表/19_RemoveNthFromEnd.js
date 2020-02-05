// leetcode 19. 删除链表的倒数第N个节点  难度中等

// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

var removeNthFromEnd = function(head, n) {
    if(head.next == null){
        return null
    }
    if(!head){  
        return head
    }

    let mark = 1
    let current = head , simb = head , target = head
    while(current.next){
        current = current.next
        mark++
        if(mark > n){
            simb = target
            target = target.next
        }
    }

    if(simb == target){
        head = head.next
    }else{
        simb.next = simb.next.next
    }
    if(n <= mark){
        return head
    }else{
        return null
    }
};

