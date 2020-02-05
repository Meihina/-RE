// import {head} from "./---BASE---.js"

// leetcode 328. 奇偶链表  难度中等
// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

// 示例 1:
// 输入: 1->2->3->4->5->NULL
// 输出: 1->3->5->2->4->NULL

// 示例 2:
// 输入: 2->1->3->5->6->4->7->NULL 
// 输出: 2->3->6->7->1->5->4->NULL

//使用双指针大法
var oddEvenList = function(head) {
    if(!head){
        return head
    }
    let current = head , q1 = current , q2 = q1
    let currentNext = head.next , q3 = currentNext , q4 = q3
    while(q2 && q4){
        if(q2.next && q4.next){
            q2 = q2.next.next
            q4 = q4.next.next
            q1.next = q2
            q3.next = q4
            q1 = q1.next
            q3 = q3.next
        }else{break}
    }
    q1.next = currentNext
    return current
};

// oddEvenList(head)