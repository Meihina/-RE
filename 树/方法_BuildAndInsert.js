//二叉树的建立和插入操作

function node(data,left,right){
    this.data = data
    this.left = left
    this.right = right
}

function Tree(){
    this.root = null
}

Tree.prototype.insert = function(data){
    var N = new node(data,null,null)
    if(!this.root){
        this.root = N
        return
    }else{
        this.insertThis(N ,this.root)
    }
}

Tree.prototype.insertThis = function(N ,root){
    if (N.data < root.data) {
        if (root.left == null) {
            root.left = N
        }else{
            this.insertThis(N ,root.left)
        }
    }else{
        if (N.data > root.data) {
            if (root.right == null) {
                root.right = N
            }else{
                this.insertThis(N ,root.right)
            }
        }
    }
}

var t = new Tree()
t.insert(30)
t.insert(40)
t.insert(33)
t.insert(38)
t.insert(26)
t.insert(18)
t.insert(17)
t.insert(19)

var node4 = new node(3,null,null)
var node5 = new node(4,null,null)
var node6 = new node(4,null,null)
var node7 = new node(3,null,null)
var node2 = new node(2,node4,node5)
var node3 = new node(2,node6,node7)
var node1 = new node(1,node2,node3)