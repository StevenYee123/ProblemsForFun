var swapPairs = function(head) {
    let temp = new ListNode(0);
    temp.next = head;
    let current = temp;
    
    while(current.next && current.next.next){
        let firstNode = current.next;
        let secondNode = current.next.next;
        firstNode.next = secondNode.next;
        current.next = secondNode;
        current.next.next = firstNode;
        current = current.next.next;
    }
    
    return temp.next;
};

// ############################################################################################################

// var reverseList = function(head) {
//     let prev = null;
    
//     while (head) {
//         let next = head.next;
//         head.next = prev;
//         prev = head;
//         head = next;
//     }
    
//     return prev;
// };

// Recursive

var reverseList = function(head, prev = null) {
    if (head === null) {
        return null;
    }
    const next = reverseList(head.next, head);
    head.next = prev;
    return next || head;
    
};

// ############################################################################################################

var hasCycle = function(head) {
    //We want to use a fast and slow pointer 
    let fastPointer = head;
    let slowPointer = head;
    
    //This means as long as the fast pointer does not reach the end of the linked list
    while (fastPointer !== null && fastPointer.next !== null){
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        
        if (fastPointer === slowPointer){
            return true;
        }
    }
    
    return false;
};

// ############################################################################################################

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};