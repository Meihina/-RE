// 剑指Offer

// 从尾到头打印链表

// import {head} from "./---BASE---.js"
function printListFromTailToHead(head)
{
    const array = []
    while(head){
        array.unshift(head.val)
        head = head.next
    }
    return array
}