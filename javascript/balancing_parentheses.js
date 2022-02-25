//i
  //string of parenetheses
//o
  //number on non-closing parentheses
//e
  //string will have a minimum length of 1

function balancingParentheses(string) {
  // if (string.length <= 1) {
  //   return string.length
  // } 
  // const removeParens = string.split('()').join('')
  // if (removeParens.length === string.length) {
  //   return string.length
  // }
  // return balancingParentheses(removeParens)

  if (string.length <= 1) {
    return string.length;
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("Expecting: 7")
  console.log(balancingParentheses('))))))((('))
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
