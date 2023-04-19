function dontHaveTime() {
    alert ('i dont have a bonus system :-p')
}

function calculateLoyaltyPoints(orderNumber) {
  if (orderNumber < 1) {
    return 0;
  } else if (orderNumber === 1 || orderNumber === 2) {
    return 1;
  } else {
    let prev1 = 1;
    let prev2 = 1;
    let points = 0;

    for (let i = 3; i <= orderNumber; i++) {
      points = prev1 + prev2;

      prev2 = prev1;
      prev1 = points;
    }

    return points;
  }
}
