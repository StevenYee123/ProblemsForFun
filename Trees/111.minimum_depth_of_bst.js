var minDepth = function(root) {
    if(!root) return 0;
    let depth = 1;
    //Utilize BFS to check for a leaf from top to bottom
    let queue = [root];
    
    while(queue.length){
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            
            //If it is a leaf node, we found the minimum depth!
            if(!node.left && !node.right) return depth;
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
        depth++;
    }
};