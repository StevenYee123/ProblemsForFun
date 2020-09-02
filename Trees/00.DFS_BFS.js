function depthFirst(root){
    let stack = [root];
    while(stack.length){
        let node = stack.pop();
        
        console.log(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
}

function recurDepthFirst(root){
    if(!root) return;

    console.log(root.val);
    recurDepthFirst(root.left);
    recurDepthFirst(root.right);
}

function breadthFirst(root){
    let queue = [root];
    while(queue.length){
        let node = queue.shift();
        
        console.log(node.val);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}