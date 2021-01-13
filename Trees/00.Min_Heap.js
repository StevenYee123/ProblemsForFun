class MinHeap{
    constructor(){
        this.array = [null];
    }

    insert(val){
        this.array.push(val);

        this.siftUp(this.array.length - 1);
    }

    siftUp(idx){
        if(idx === 1) return;

        //Retrieve the parent idx
        let parentIdx = Math.floor(idx/2);

        //If it is greater than our parent
        if(this.array[idx] < this.array[parentIdx]){
            //Swap the values!
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
            this.siftUp(parentIdx);
        }
    }

    deleteMax(){
        //Max will always be at idx 1
        let max = this.array[1];
        
        //Take the very rightmost and bottom-most element and put it as the root
        this.array[1] = this.array.pop();

        //Call siftdown on the new root
        this.siftDown(1);

        return max;
    }

    siftDown(idx){
        let leftIdx = idx * 2;
        let rightIdx = idx * 2 + 1;
        let arr = this.array;
        let leftVal = arr[leftIdx];
        let rightVal = arr[rightIdx];
        let val = arr[idx];

        //This is to ensure this is the lowest point we can go, meaning we hit a leaf node!
        if(!leftVal) leftVal = Infinity; 
        if(!rightVal) rightVal = Infinity;

        //Found a spot to put the val
        if(val < leftVal && val < rightVal) return;

        let swapIdx;
        if(leftVal < rightVal){
            swapIdx = leftIdx;
        } else {
            swapIdx = rightIdx;
        }

        //Once again perform a swap
        [arr[swapIdx], arr[idx]] = [arr[idx], arr[swapIdx]];
        this.siftDown(swapIdx);
    }
}

let heap = new MinHeap();
heap.insert(42);
heap.insert(32);
heap.insert(24);
heap.insert(100);
heap.insert(50);
heap.insert(27);

console.log(heap.array);
console.log(heap.deleteMax());
console.log(heap.array);
