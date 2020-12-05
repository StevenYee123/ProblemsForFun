var Leaderboard = function() {
    this.leaderBoard = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if(this.leaderBoard[playerId] === undefined) this.leaderBoard[playerId] = 0;
    
    this.leaderBoard[playerId] += score;
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let sorted = Object.values(this.leaderBoard).sort((a, b) => a - b);
    
    let sum = 0;
    
    while(K){
        sum += sorted.pop();
        K--;
    }
    
    return sum;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.leaderBoard[playerId] = 0;
};