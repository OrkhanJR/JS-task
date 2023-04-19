function isSmallShipment() {
  const length = +prompt("Enter the length of the item in cm:");
  const width = +prompt("Enter the width of the item in cm:");
  const height = +prompt("Enter the height of the item in cm:");
  const weight = +prompt("Enter the weight of the shipment in kg:");
  const distance = +prompt("Enter the delivery distance in km:");

  if (length + width + height > 150) {
    alert("This shipment is not small: the sum of length, width, and height exceeds 150cm.");
  }
  if (length > 100 || width > 100 || height > 100) {
    alert("This shipment is not small: one or more dimensions exceeds 100cm.");
  }
  if (weight > 10) {
    alert("This shipment is not small: the weight exceeds 10kg.");
  }
  if (distance < 3 || distance > 10) {
   alert("the delivery distance is not within the range of 3 to 10km.");
  }

  else {
    alert("This shipment is small.");
  }
  
}
