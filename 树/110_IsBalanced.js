// leetcode 110. 平衡二叉树  难度简单

// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

var isBalanced = function(root) {
    let res = true
    function Balance(node){
        if(!node){
            return 0
        }
        let left = Balance(node.left)
        let right = Balance(node.right)
        if(Math.abs(left - right) > 1){
            res = false
        }
        console.log(left , right)
        return Math.max(left , right) + 1
    }
    Balance(root)
    return res
};