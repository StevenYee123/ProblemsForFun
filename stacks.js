// ############################################################################################################

// var isValid = function(s) {
//     if (!s.length) return true;
//     const brackets = {
//         "(" : ")",
//         "[" : "]",
//         "{" : "}"
//     }
//     let stack = [];

//     for(let i = 0; i < s.length; i++){
//         if(brackets[s[i]] !== undefined){
//             stack.push(s[i]);
//         } else if (brackets[stack.pop()] != s[i]){
//             return false;
//         }
//     }

//     return stack.length === 0;
// };

// console.log(isValid("()"));

class MultiStack {
  constructor(stackSize) {
    this._stackCapacity = stackSize;
    this.values = []; // values in the stack which is max size of stackSize * 3
    this.sizes = [0, 0, 0]; // length of 3 and each index contains the number of items in the respective stack
    this.numberOfStacks = 3;
  }

  get stackCapacity() {
    return this._stackCapacity;
  }

  push(stackNumber, value) {
    if (this.isFull(stackNumber)) {
      return console.log(`Stack number ${stackNumber} is full`);
    }
    // Add one to the respective stack count
    this.sizes[stackNumber]++;
    // Add the value to the list
    this.values[this.indexOfTop(stackNumber)] = value;
    return console.log(
      `Item ${value} has been successfully added to stack ${stackNumber}`
    );
  }

  pop(stackNumber) {
    if (this.isEmpty(stackNumber)) {
      return console.log(`Stack number ${stackNumber} is empty`);
    }
    const topIndex = this.indexOfTop(stackNumber);
    const value = this.values[topIndex];
    this.values[topIndex] = 0; // Clear out element
    this.sizes[stackNumber]--; // Reduce num elements in the stack
    return value;
  }

  peek(stackNumber) {
    if (this.isEmpty(stackNumber)) {
      console.log(`Stack number ${stackNumber} is empty`);
    }
    const topIndex = this.indexOfTop(stackNumber);
    return this.values[topIndex];
  }

  isEmpty(stackNumber) {
    return this.sizes[stackNumber] === 0;
  }

  isFull(stackNumber) {
    return this.sizes[stackNumber] === this._stackCapacity;
  }

  indexOfTop(stackNumber) {
    const offset = stackNumber * this._stackCapacity; // Find the starting point in the array
    const size = this.sizes[stackNumber]; // How many elements are in that stack currently?
    return offset + size - 1;
  }
}