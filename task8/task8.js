function convertNumberToText(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const numArray = number.toString().split('');

  if (number < 0 || number > 99) {
    alert('Number out of range');
    return;
  }

  if (number === 0) {
    alert('zero');
    return;
  }

  if (numArray[0] === '0') {
    alert(ones[numArray[1]]);
    return;
  }

  if (numArray[0] === '1' && numArray[1] !== '0') {
    alert(teens[numArray[1] - 1]);
    return;
  }

  alert(`${tens[numArray[0]]} ${ones[numArray[1]]}`);
}

function convertNumber() {
  const number = prompt('Enter a two-digit number');
  convertNumberToText(number);
}

