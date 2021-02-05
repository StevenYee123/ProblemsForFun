class Trie{
    constructor(){
        this.root = {};
    }

    add(name, phoneNumber){
        let node = this.root;
        for(let char of name){
            if(!(char in node)){
                node[char] = {};
            }
            node = node[char];
        }

        node["NUMBER"] = phoneNumber;
    }

    find(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!char in node){
                return null;
            }
            node = node[char];
        }

        return node;
    }

    listContacts(prefix){
        let subTrie = this.find(prefix);
        print(subTrie, prefix);
    }
}

function print(subTrie, prefix){
    for(let key in subTrie){
        if(key === "NUMBER"){
            console.log(prefix + " :" + subTrie[key]);
        } else {
            print(subTrie[key], prefix + key);
        }
    }
}

let T = new Trie();
T.add("Joe", 1234567868);
T.add("James", 4483455747);
T.add("Joey", 12093091302);
T.add("Samantha", 4454443947);
T.add("Susy", 9382489284);
T.listContacts("J");