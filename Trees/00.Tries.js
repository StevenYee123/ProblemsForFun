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

    insert(word, root = this.root){
        let letter = word[0];
        if(!(letter in root.children)){
            root.children[letter] = new Node();
        }

        //Meaning the end of the word has been reached, create a terminal node
        if(word.length === 1){
            root.children[letter].isTerminal = true;
        } else {
            this.insert(word.slice(1), root.children[letter]);
        }
    }

    print(root = this.root){
        for(let letter in root.children){
            console.log(letter);
            this.print(root.children[letter]);
        }
    }
}

let myTrie = new Trie();
myTrie.insert("ten");
myTrie.insert("tea");
myTrie.print();