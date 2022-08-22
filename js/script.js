function start() {
  var buttonCalculateIMC = document.querySelector('#button-calculator-imc');
  buttonCalculateIMC.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calulateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  var imcResult = document.querySelector('#imc-result');
  var classificacaoElemet = document.querySelector('#classificacao');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calulateImc(weight, height);
  var formattedImc = imc.toFixed(1).replace('.', ',');

  imcResult.textContent = formattedImc;

  var classificacao = '';

  if (imc <= 16 || imc <= 16.9) {
    classificacao = 'Muito abaixo do peso';
  } else if (imc == 17 || imc <= 18.4) {
    classificacao = 'Abaixo do peso';
  } else if (imc == 18.5 || imc <= 24.9) {
    classificacao = 'Peso normal';
  } else if (imc == 25 || imc <= 29.9) {
    classificacao = 'Acima do peso';
  } else if (imc == 30 || imc <= 34.9) {
    classificacao = 'Obesidade grau I';
  } else if (imc == 35 || imc <= 40) {
    classificacao = 'Obesidade grau II';
  } else if (imc > 40) {
    classificacao = 'Obesidade grau III...';
  }

  classificacaoElemet.innerText = classificacao;
  console.log(classificacao);
  console.log(formattedImc);
}

start();
