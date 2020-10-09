var isSymmetric = function(root) {
    if(!root) return true;
    
    return checkSymmetry(root.left, root.right);
};

const checkSymmetry = (leftNode, rightNode) => {  
    if(!leftNode || !rightNode) return leftNode === rightNode;
    
    if(leftNode.val !== rightNode.val) return false;
    
    return checkSymmetry(leftNode.left, rightNode.right) && checkSymmetry(leftNode.right, rightNode.left);
}