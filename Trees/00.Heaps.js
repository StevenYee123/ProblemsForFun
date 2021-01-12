class MaxHeap{
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
        if(this.array[idx] > this.array[parentIdx]){
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
}

let heap = new MaxHeap();
heap.insert(42);
heap.insert(32);
heap.insert(24);

// console.log(heap.array);