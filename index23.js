const check = prompt('Type your check');
const tips = prompt('Type tips you whant to leave');
console.log(check);
console.log(tips);
if (check === null) {
  alert('Canceled.');
}
if (tips === null) {
  alert('Canceled.');
}
const toNumberCheck = Number(check);
const toNumberTips = Number(tips);
if (toNumberCheck <= 0) {
  alert('Invalid input data1');
} else if (isNaN(toNumberCheck)) {
  alert('Invalid input data1');
}
if (toNumberTips < 0) {
  alert('Invalid input data');
} else if (toNumberTips > 100) {
  alert('Invalid input data');
} else if (isNaN(toNumberTips)) {
  alert('Invalid input data');
}
const tipAmount = (toNumberCheck / 100) * toNumberTips;
const sum = toNumberCheck + tipAmount;
const text = `Check sum: ${toNumberCheck}, Tip: ${toNumberTips}%, Tip amount: ${tipAmount}, Total sum to pay: ${sum}`;
alert(text);
