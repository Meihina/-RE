// leetcode 21. 合并两个有序链表  难度简单

// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 


import {head, head2} from "./---BASE---.js"

var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2
    }else if(!l2){
        return l1
    }
    let q1 = l1 , q2 = l2 , res = l1 , _q = res
    if(q2.val > q1.val){
        q1 = q1.next
    }else{
        q2 = q2.next
        res = l2
        _q = res
    }
    while(q1 && q2){
        if(q1.val > q2.val){
            _q.next = q2
            q2 = q2.next
            _q = _q.next
        }else{
            _q.next = q1
            q1 = q1.next
            _q = _q.next
        }
    }
    if(q1 == null){
        _q.next = q2
    }else{
        _q.next = q1
    }
    return res
};

mergeTwoLists(head,head2)