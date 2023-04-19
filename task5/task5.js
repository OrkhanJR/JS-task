function task5() {
    const temp1 = +prompt("Enter the average annual temperature in the first country:");
    const temp2 = +prompt("Enter the average annual temperature in the second country:");
    const temp3 = +prompt("Enter the average annual temperature in the third country:");
  
    const arr = [temp1, temp2, temp3];
    arr.sort((a, b) => b - a);
  
    alert(`The temperatures in descending order: ${arr.join(", ")}`);
  }
  