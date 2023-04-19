function suggestTable() {
  const numGuests = +prompt("How many people are in your group?");

  if (numGuests <= 2) {
    alert("You should take a small table");
  } else if (numGuests <= 4) {
    alert("You should take a medium table");
  } else if (numGuests <= 8) {
    alert("You should take a large table");
  } else {
    alert("Sorry, we cannot accommodate a group larger than 8 people :(");
  }
}
