class GraphNode{
    constructor(val){
        this.val = val;
        this.neighbors = [];
    }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');

a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

function depthFirst(node, visited = new Set()){
    if(visited.has(node.val)) return;

    visited.add(node.val);
    console.log("Node value: " + node.val);
    node.neighbors.forEach((neighbor) => depthFirst(neighbor, visited));
}

depthFirst(a);

// let graph = {
//     "a" : ["b", "c", "e"],
//     "b" : [],
//     "c" : ["b", "d"],
//     "e" : ["a"],
//     "f" : ["e"]
// }

// //How to use via adjacency list
// function depthFirst(graph, node, visited = new Set()){
//     if(visited.has(node)) return;
    
//     console.log(`Node value: ${node}`);
//     visited.add(node);
//     graph[node].forEach((neighbor) => depthFirst(graph, neighbor, visited));
// }

// depthFirst(graph, "a");