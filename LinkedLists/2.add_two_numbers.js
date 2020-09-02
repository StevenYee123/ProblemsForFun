var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let curr = head;
    let carryOver = 0;
    
    while(l1 || l2){
        //Gotta make sure our nodes are valid
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        
        //Get our sum, reset carryOver to 0
        let sum = carryOver + l1Val + l2Val;
        carryOver = 0;
        
        if(sum > 9){
            sum %= 10;
            carryOver = 1;
        }
        
        curr.next = new ListNode(sum);
        curr = curr.next;
        
        //Making sure our nodes are valid!
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    
    
    //If we have one carryOver left over
    if(carryOver) curr.next = new ListNode(carryOver);
    
    return head.next;
};