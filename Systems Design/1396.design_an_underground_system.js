let UndergroundSystem = function() {
    this.checkIns = new Map();
    this.trips = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns.set(id, {stationName, t});
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const route = this.checkIns.get(id).stationName + "=>" + stationName;
    //If trips map doesn't already have route
    if(!this.trips.has(route)){
        this.trips.set(route, []);
    }
    
    this.trips.get(route).push(t - this.checkIns.get(id).t);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const route = startStation + "=>" + endStation;
    let sum = 0;
    
    for(let i = 0; i < this.trips.get(route).length; i++){
        sum += this.trips.get(route)[i];
    }
    
    return sum/this.trips.get(route).length;
};