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

    search(word, root = this.root){
        let letter = word[0];

        //If we are at the end of the word
        if(word.length === 0){
            if(root.isTerminal){
                return true;
            } else {
                return false;
            }
        }

        //If the letter exists as a child
        if(letter in root.children){
            return this.search(word.slice(1), root.children[letter]);
        } else {
            return false;
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
console.log(myTrie.search("ten")); //true
console.log(myTrie.search("te")); //false
console.log(myTrie.search("tex")); //false;
