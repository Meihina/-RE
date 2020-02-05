// leetcode 94. 二叉树的中序遍历  难度中等

var inorderTraversal = function(root) {
    function inorder(root){
        if (root) {
            inorder(root.left)
            res.push(root.val)
            inorder(root.right)
        }
    }
    let res = []
    inorder(root)
    return res
};