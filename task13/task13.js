function getOptimalBanknotes() {
    const denominations = [100, 50, 20, 10, 5, 1];
    const amountRequested = +prompt("Enter the amount you would like to withdraw:");
  
    let remainingAmount = amountRequested;
    const banknotes = {};
  
    for (let denomination of denominations) {
      const count = Math.floor(remainingAmount / denomination);
      if (count > 0) {
        banknotes[denomination] = count;
        remainingAmount -= count * denomination;
      }
    }
  
    let output = "Optimal banknotes for " + amountRequested + " AZN:\n";
    for (let denomination in banknotes) {
      output += denomination + " AZN: " + banknotes[denomination] + "\n";
    }
  
    alert(output)
    
  }
  
 
  