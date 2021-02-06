class Deck{
    constructor(){
        this.deck = [];

        //Just construct the deck right away
        const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        const values = ["Ace", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

        for(let suit of suits){
            for(let val of values){
                this.deck.push(`${val} of ${suit}`);
            }
        }
    }
}

let deck = new Deck();
console.log(deck);