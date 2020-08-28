function pilesOfBoxes(boxesInPiles) {
    boxesInPiles.sort((a, b) => b - a);
    let count = 0;
    let totalCount = 0;
    for(let i = 1; i < boxesInPiles.length; i++){
        if(boxesInPiles[i] < boxesInPiles[i - 1]) {
            count += i;
        };
    }

    return count;
}