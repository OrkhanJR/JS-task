function checkDiscount(name, age, numOrders, orderAmounts) {
    const totalAmount = orderAmounts.reduce((sum, amount) => sum + amount, 0);
    const isRegular = numOrders >= 4 && totalAmount >= 100;
    const isSenior = age >= 60;
  
    if (isRegular || isSenior) {
      return `${name} имеет право на скидку.`;
    } else {
      return `${name} не имеет права на скидку.`;
    }
  }
  

  function nothingToCheck() {
    alert('i dont have a time to do this, sorry :((')
  }