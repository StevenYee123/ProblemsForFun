// ############################################################################################################

// var isValid = function(s) {
//     if (!s.length) return true;
//     const brackets = {
//         "(" : ")",
//         "[" : "]",
//         "{" : "}"
//     }
//     let stack = [];

//     for(let i = 0; i < s.length; i++){
//         if(brackets[s[i]] !== undefined){
//             stack.push(s[i]);
//         } else if (brackets[stack.pop()] != s[i]){
//             return false;
//         }
//     }

//     return stack.length === 0;
// };

// console.log(isValid("()"));

