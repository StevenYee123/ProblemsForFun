// ############################################################################################################
// Check if a binary tree is balanced 

var isBalanced = function(root) {
    //handle case when root itself is null
	if(root === null) return true;
	//turns to false if unbalanced tree encountered
    let flag = true;
	//recursive function - it recursively returns the height of the tree 
    function helper(root) {
	    //base case of recursion - tree with no nodes return height 0
        if(root.left === null && root.right === null) {
            return 0
        }
        let leftHeight = 0, rightHeight = 0;
        if(root.left !== null) {
		    //height of left subtree is one plus the height of child sub tree
            leftHeight = 1 + helper(root.left);
        }
        if(root.right !== null) {
		   //height of right subtree is one plus the height of child sub tree
            rightHeight = 1 + helper(root.right);   
        }
		//height of tree is max between height of left and right subtree
        let actualHeight = Math.max(leftHeight, rightHeight);
		//if abs diff between leftHt and right Ht greater than one; turn flag to false
        if(Math.abs(leftHeight-rightHeight) > 1) flag = false;
        return actualHeight;
    }
    helper(root);
    return flag
};
//
// ############################################################################################################
// Get the minimum depth of a binary tree

var minDepth = function(root) {
    if (root === null) return 0;
    
    //Using BFS, so we need a queue
    let queue = [];
    
    //The idea is to find the first leaf node using BFS, which returns min depth. 
    queue.push(root);
    let depth = 0;
    while (queue.lenth !== 0){
        let numberOfNodes = queue.length;
        while (numberOfNodes > 0){
            let currentNode = queue.shift();
            
            if (currentNode.left === null && currentNode.right === null){
                depth++;
                return depth;
            } 
            
            if (currentNode.left !== null){
                queue.push(currentNode.left);
            }
            
            if (currentNode.right !== null){
                queue.push(currentNode.right);
            }
            
            numberOfNodes--;
        }
        
        depth++;
    }
};

// ###############################################################################################
// inOrderTraversal, both recursive AND iterative

const inorderTraversalIter = (root) => {
    let stack = [];
    let output = [];
    
    while (root || stack.length){
        if (root){
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            output.push(root.val);
            root = root.right;
        }
    }
    
    return output;
}

const inOrderTraversalRecur = (root) => {
    let output = [];

    function inOrderTraversal(root){
        if (!root) return;
        inOrderTraversal(root.left);
        output.push(root.val);
        inOrderTraversal(root.right);
    }

    inOrderTraversal(root);
    return output;
}