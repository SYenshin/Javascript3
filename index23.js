const check = prompt('Type your check');
if (check === null) {
  alert('Canceled.');
} else {
  const tips = prompt('Type tips you whant to leave');
  if (tips === null) {
    alert('Canceled.');
  } else {
    const toNumberCheck = Number(check);
    const toNumberTips = Number(tips);
    if (toNumberCheck <= 0) {
      alert('Invalid input data');
    } else if (isNaN(toNumberCheck)) {
      alert('Invalid input data');
    } else if (check.trim() === '') {
      alert('Invalid input data');
    } else if (toNumberTips < 0) {
      alert('Invalid input data');
    } else if (toNumberTips > 100) {
      alert('Invalid input data');
    } else if (isNaN(toNumberTips)) {
      alert('Invalid input data');
    } else if (tips.trim() === '') {
      alert('Invalid input data');
    } else {
      const tipAmount = Number(
        ((toNumberCheck / 100) * toNumberTips).toFixed(2)
      );
      const sum = Number(toNumberCheck + tipAmount).toFixed(2);
      const text = `Check sum: ${toNumberCheck}, Tip: ${toNumberTips}%, Tip amount: ${tipAmount}, Total sum to pay: ${sum}`;
      alert(text);
      console.log(check);
      console.log(tips);
    }
  }
}
