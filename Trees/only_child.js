    function onlyChild(root) {
        if(!root) return 0;
        
        let count = 0;
        let queue = [root];
        
        while(queue.length){
            let size = queue.length;
            for(let i = 0; i < size; i++){
                let current = queue.shift();
                
                if (current.left !== null && !current.right){
                    count++;
                }
                
                if (current.right !== null && !current.left){
                    count++;
                }
                
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);
            }
        }

        
        return count;
    }