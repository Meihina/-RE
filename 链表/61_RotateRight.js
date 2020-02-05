// leetcode 61. 旋转链表  难度中等

// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL

// import {head} from "./---BASE---.js"

var rotateRight = function(head, k) {
    function Getlength(head){
        let h = head
        let count = 0
        while(h){
            h = h.next
            count++
        }
        return count
    }
    let length = Getlength(head)
    if(k % length == 0){
        return head
    }
    let back = null 
    let front = head 
    let count = 1
    while(count <= length){
        if(count <= k % length){
            count++
            continue
        }else{
            count++
            if(!back){
                back = head
                front = back.next
            }else{
                back = back.next
                front = back.next
            }
        }
    }
    let res = head
    let reres = front
    for(let i = 0;i < length;i++){
        if(res == back){
            res.next = null
            break
        }else{
            res = res.next
        }
    }
    for(let i = 0;i < length;i++){
        if(reres.next == null){
            reres.next = head
            break
        }else{
            reres = reres.next
        }
    }
    return front
};