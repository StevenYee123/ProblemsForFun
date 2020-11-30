/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
    this.hitHash = {};
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    if(this.hitHash[timestamp] === undefined){
        this.hitHash[timestamp] = 0;
    }
    
    return this.hitHash[timestamp]++;
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp, range = 300) {
    let count = 0;
    let bound = timestamp > range ? timestamp - range : 0;
    while(timestamp > bound){
        if(this.hitHash[timestamp]) count += this.hitHash[timestamp];
        timestamp--;
    }
    
    return count;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */