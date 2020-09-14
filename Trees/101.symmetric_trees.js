var isSymmetric = function(root) {
    if(!root) return true;
    
    return checkSymmetry(root.left, root.right);
};

const checkSymmetry = (leftSubTree, rightSubTree) => {
    if(!leftSubTree || !rightSubTree) return leftSubTree === rightSubTree;
    
    if(leftSubTree.val !== rightSubTree.val) return false;
    
    return checkSymmetry(leftSubTree.left, rightSubTree.right) && checkSymmetry(leftSubTree.right, rightSubTree.left);
}