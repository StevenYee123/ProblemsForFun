class RaffleSystem{
    constructor(limit = 1000){
        this.limit = limit;
        this.distributed = new Set();
        this.tickets = [];
    }

    handOut(){
        let num = Math.floor(Math.random() * this.limit);
        while((this.distributed.has(num))){
            num = Math.floor(Math.random() * this.limit);
        }

        this.tickets.push(num);
        this.distributed.add(num);

        return num;
    }

    pickWinner(){
        let idx = Math.round(Math.random() * this.tickets.length);

        return this.tickets[idx];
    }
}

let raffleSystem = new RaffleSystem();
console.log(raffleSystem.handOut());
console.log(raffleSystem.handOut());
console.log(raffleSystem.handOut());
console.log(raffleSystem.handOut());
console.log(raffleSystem.handOut());
console.log(raffleSystem.handOut());
console.log(raffleSystem.handOut());
console.log("Lucky winner number: " + raffleSystem.pickWinner());