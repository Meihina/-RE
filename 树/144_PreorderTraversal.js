// leetcode 144. 二叉树的前序遍历  难度中等

var preorderTraversal = function(root) {
    function preorder(root){
        if (root) {
            res.push(root.val)
            preorder(root.left)
            preorder(root.right)
        }
    }
    let res = []
    preorder(root)
    return res
};