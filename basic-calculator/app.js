function calculate() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const result = document.getElementById('result');

  if (isNaN(num1) | isNaN(num2)) {
    return alert('Check Input');
  }

  let sum = num1 + num2;
  let diff = num1 - num2;
  let mul = num1 * num2;
  let div = num1 / num2;

  const resultElement = document.createElement('ion-card');
  resultElement.innerHTML = `
    <ion-card-content>
        <h1><strong>Result</strong></h1>
        <h2><strong>A+B:</strong> ${sum}</h2>
        <h2><strong>A-B:</strong> ${diff}</h2>
        <h2><strong>A*B:</strong> ${mul}</h2>
        <h2><strong>A/B:</strong> ${div}</h2>
    </ion-card-content>
  `;
  result.appendChild(resultElement);
}

function reset() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').innerHTML = '';
}
