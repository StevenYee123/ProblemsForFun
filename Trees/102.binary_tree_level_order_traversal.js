const levelOrder = (root) => {
    if (!root) return [];
    
    let result = [];  
    let queue = [root];
    
    //We want to follow a format extremely similar to BFT
    while(queue.length){
        let size = queue.length;
        let currentLevel = [];
        for(let i = 0; i < size; i++){
            let current = queue.shift();
            currentLevel.push(current.val);
            
            //Add the child nodes
            if (current.left !== null){
                queue.push(current.left);
            }
            
            if (current.right !== null){
                queue.push(current.right);
            }
        }
        
        result.push(currentLevel);
    }
    
    return result;
}