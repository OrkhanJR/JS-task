function calculateSavings() {
    const initialAmount = +prompt("Enter the initial amount: ");
    const duration = +prompt("Enter the duration in years: ");
    const interestRate = +prompt("Enter the interest rate per year (%): ");
    
    let savingsAmount = initialAmount;
    for (let i = 0; i < duration; i++) {
      savingsAmount += savingsAmount * (interestRate / 100);
    }
    
    alert(`Your savings amount after ${duration} years is ${savingsAmount.toFixed(2)}`);
  }
  