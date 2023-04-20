// function iNeedHelp () {
//     alert ('Help :-(')
// }

function sumOfDigits() {
  let code = prompt("Enter your code:");
  let sum = 0;
  for (let i = 0; i < code.length; i++) {
    sum += parseInt(code.charAt(i));
  }
  alert("the sum of digits is: " + sum);
}
