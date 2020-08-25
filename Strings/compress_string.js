function compress(s) {
    let set = new Set(s.split(""));
    
    return Array.from(set).join("");
}

console.log(compress("aaaaaabbbccccaaaaddf"));