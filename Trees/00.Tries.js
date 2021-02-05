class Node{
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }

    insert(word){

    }
}

let myTrie = new Trie();
myTrie.insert("ten");
myTrie.insert("tea");