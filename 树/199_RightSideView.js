// leetcode 199. 二叉树的右视图  难度中等

// 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

var rightSideView = function(root) {
    let result = []
    if(!root){return result}
    function levelOrder(n , level){
        result[level] = n.val
        if(n.left){
            levelOrder(n.left , level + 1)
        }
        if(n.right){
            levelOrder(n.right , level + 1)
        }
    }
    levelOrder(root , 0)
    return result
};