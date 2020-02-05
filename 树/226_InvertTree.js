// leetcode 226. 翻转二叉树  难度简单

// 翻转一棵二叉树。

var invertTree = function(root) {
    if(!root){return root}
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
};