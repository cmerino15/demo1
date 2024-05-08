function tipFunction() {
  bill = document.getElementById("bill").value;
  tip = bill * .30;
  response = ` 30% of ${bill} is ` + tip;
  document.getElementById("output").value = response;
}


