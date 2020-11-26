const start = 0, end = 1;

var minMeetingRooms = function(intervals) {
    if(!intervals.length) return 0;
    intervals.sort((a, b) => a[start] === b[start] ? a[end] - b[end] : a[start] - b[start]);
    
    let minHeap = [];
    for(let i = 0; i < intervals.length; i++){
        let curr = intervals[i];
        
        if(!minHeap.length){
            minHeap.push(curr[end]);
        } else {
            let earliestTime = minHeap[0];
            
            if(curr[start] < earliestTime){
                minHeap.push(curr[end]);
                minHeap.sort((a, b) => a > b ? 1 : -1);
            } else{
                minHeap[0] = curr[end];
                minHeap.sort((a, b) => a > b ? 1 : -1);
            }
        }
    }
    
    return minHeap.length;
};