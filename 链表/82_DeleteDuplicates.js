// leetcode 82. 删除排序链表中的重复元素 II  难度中等

// 示例 1:
// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5

// 示例 2:
// 输入: 1->1->1->2->3
// 输出: 2->3

// import {head} from "./---BASE---.js

var deleteDuplicates = function(head) {
    let current = head
    let res = head
    let last = head
    let group = []
    let prev = null
    while(current){
        if(prev == current.val && !group.includes(current.val)){
            group.push(current.val)
        }
        prev = current.val
        current = current.next
    }
    while(res){
        if(group.includes(last.val)){
            head = head.next
            last = res.next
            res = res.next
            continue
        }
        if(group.includes(res.val)){
            last.next = res.next
            res = res.next
        }else{
            last = res
            res = res.next
        }
    }
    return head
};