var topKFrequent = function(words, k) {
    let wordTrack = {};
    
    for(let i = 0; i < words.length; i++){
        let curr = words[i];
        if(wordTrack[curr] !== undefined){
            wordTrack[curr] += 1;
        } else {
            wordTrack[curr] = 1;
        }
    }

    let result = Object.keys(wordTrack).sort((a,b) => {
            let countCompare = wordTrack[b] - wordTrack[a];
            if (countCompare === 0) return a.localeCompare(b);
            else return countCompare;
        }   
    );
    
    return result.slice(0, k);
};