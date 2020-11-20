var merge = function(intervals) {
    if(!intervals.length) return intervals;

    //First we sort by the starting values
    intervals.sort((a, b) => a[start] - b[start]);

    //Initialize our answer with a starting interval
    let prev = intervals[0];
    let answer = [prev];

    //Now we loop through and add accordingly
    for(let i = 0; i < intervals.length; i++){
        let curr = intervals[i];
        //If they overlap then we change prev
        if(prev[end] >= curr[start]){
            prev[end] = Math.max(curr[end], prev[end]);
        } else {
            answer.push(curr);
            prev = curr;
        }
    }

    return answer;
};
