// leetcode 101. 对称二叉树  难度简单

// 给定一个二叉树，检查它是否是镜像对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// function node(data,left,right){
//     this.data = data
//     this.left = left
//     this.right = right
// }

var isSymmetric = function(root) {
    function SymmetricJUG(n1 , n2){
        if(!n1 && !n2){
            return true
        }else if(!n1 || !n2){
            return false
        }else if(n1.val != n2.val){
            return false
        }else{
            return SymmetricJUG(n1.left , n2.right) && SymmetricJUG(n1.right , n2.left)
        }
    }
    return SymmetricJUG(root , root)
};