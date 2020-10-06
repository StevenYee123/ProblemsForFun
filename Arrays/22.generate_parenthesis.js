var generateParenthesis = function(n, curr = "", open = 0, close = 0, result = []) {
    if(curr.length === n * 2) result.push(curr);
    
    if(open < n) generateParenthesis(n, curr + "(", open + 1, close, result);
    if(close < open) generateParenthesis(n, curr + ")", open, close + 1, result);
    
    return result
};