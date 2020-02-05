// leetcode 100. 相同的树  难度简单

// 给定两个二叉树，编写一个函数来检验它们是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q){
        return true
    }else if(!p || !q){
        return false
    }else if(p.val != q.val){
        return false
    }else{
        return isSameTree(p.left , q.left) && isSameTree(p.right , q.right)
    }
};