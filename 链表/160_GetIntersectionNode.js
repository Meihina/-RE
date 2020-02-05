//leetcode 160 相交链表  难度简单

//输入两个链表，找出它们的第一个公共结点。
// 如果两个链表没有交点，返回 null.
// 在返回结果后，两个链表仍须保持原有的结构。 **
// 可假定整个链表结构中没有循环。
// 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

// import {head,head2} from "./---BASE---.js"

function getIntersectionNode(head,head2){
    function Getlength(h){
        let res = 1
        let head = h
        while(head.next){
            res++
            head = head.next
        }
        return res
    }

    if(!head || !head2){
        return null
    }
    let LenHead1 = Getlength(head)
    let LenHead2 = Getlength(head2)
    let advance,front,behind
    if(LenHead1 > LenHead2){
        [advance,front,behind] = [LenHead1 - LenHead2,head,head2]
    }else{
        [advance,front,behind] = [LenHead2 - LenHead1,head2,head]
    }
    for(let i = 0;i < advance;i++){
        front = front.next
    }
    while(front){
        if(front === behind){
            return front
        }
        front = front.next
        behind = behind.next
    }
    return null
}
