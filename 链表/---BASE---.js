function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(1)
let node1 = new ListNode(2)
let node2 = new ListNode(3)
let node3 = new ListNode(4)
let node4 = new ListNode(5)
let node24 = new ListNode(6)
head.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node24

let head2 = new ListNode(-3)
let node5 = new ListNode(1)
let node7 = new ListNode(2)
let node8 = new ListNode(5)
let node9 = new ListNode(5)
let node10 = new ListNode(6)
let node11 = new ListNode(8)
let node12 = new ListNode(9)
let node13 = new ListNode(11)
let node14 = new ListNode(15)
head2.next = node5
node5.next = node7
node7.next = node8
node8.next = node9
node9.next = node10
node10.next = node11
node11.next = node12
node12.next = node13
node13.next = node14

export {head,head2}

let l1 = new ListNode(1)
let w1 = new ListNode(2)
let w2 = new ListNode(9)

let l2 = new ListNode(4)
let w3 = new ListNode(5)
let w4 = new ListNode(6)

l1.next = w1
w1.next = w2

l2.next = w3
w3.next = w4

export {l1,l2}