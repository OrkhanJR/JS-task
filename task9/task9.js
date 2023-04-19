function printDivisibleNumbers() {
    const userNumber = Number(prompt("Please enter a number:"));
  
    for (let i = 1; i <= 1000; i++) {
      if (i % userNumber === 0) {
        console.log(i);
      }
    }
  }
  