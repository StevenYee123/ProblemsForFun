// ##########################################################################################################

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

// ###########################################################################################################
// Controlled reverse linked list

var reverseBetween = function(head, m, n) {
    if (head === null) {
        return null;
    }
    
    let prev = null;
    let current = head;
    
    while (m > 1){
        prev = current;
        current = current.next;
        m--;
        n--;
    }
    
    let connection = prev;
    let tail = current;
    
    while (n > 0){
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
        n--;
    }
    
    if (connection !== null){
        connection.next = prev;
    } else {
        head = prev;
    }
    
    tail.next = current;
    
    return head;
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
// Delete a node using only the node given. You are guaranteed that the node given is NOT the tail
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// ############################################################################################################
// Grab the middle node

var middleNode = function(head) {
    let fast = head;
    let slow = head;
    
    while (fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
};
