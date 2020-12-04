var hasCycle = function(head) {
    //1.Establish 2 pointers, one fast one slow
    //2.Fast pointer will move at 2 nodes at a time, where slow will move at 1
    
    let slow = head;
    let fast = head;
    
    //According to a principle if in a circle they will definitely meet at a certain point
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast) return true;
    }
    
    //If no cycle and fast pointer reaches end return false
    return false;
};