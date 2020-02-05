// leetcode 145. 二叉树的后序遍历  难度困难

var postorderTraversal = function(root) {
    function postorder(root){
        if (root) {
            postorder(root.left)
            postorder(root.right)
            res.push(root.val)
        }
    }
    let res = []
    postorder(root)
    return res
};