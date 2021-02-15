class CurrencyExchange{
    constructor(){
        this.graph = {};
    }

    addRate(top, bottom, rate){
        if(!top in this.graph) this.graph[top] = {};
        if(!bottom in this.graph) this.graph[bottom] = {};

        this.graph[top][bottom] = quotient;
        this.graph[bottom][top] = 1/quotient;
    }

    findRateBFS(numerator, target){
        const queue = [{node: numerator, quotient: 1}];
        const visited = new Set();

        while(queue.length > 0){
            const {node, quotient} = queue.shift();
            visited.add(node);

            for(const denominator in this.graph[node]){
                if(!visited.has(denominator)){
                    const newQuotient = quotient * this.graph[node][denominator];
                    if(denominator === target){
                        return newQuotient;
                    }

                    queue.push({node: denominator, quotient: newQuotient});
                }
            }
        }

        return -1;
    }
}

