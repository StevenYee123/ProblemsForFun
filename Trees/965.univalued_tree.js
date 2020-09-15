var isUnivalTree = function(root) {
    if (!root) return true;
    
    let check = root.val;
    function inOrderTraversal(node){
        if (!node) return true;
        
        if (node.val !== check) return false;
        return inOrderTraversal(node.left) && inOrderTraversal(node.right);
    }
    
    return inOrderTraversal(root);
};