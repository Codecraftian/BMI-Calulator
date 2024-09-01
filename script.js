const form = document.querySelector('form')
let bmi = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('.result');
  const categories = document.querySelector('.categories');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `You give a invalid height ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `You give a invalid height ${weight}`
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>Your BMI: ${bmi}</span>`
  }

  if (bmi < (186 / 10)) {
    categories.innerHTML = `Under Weight`;
  } else if (bmi >= (186 / 100) && bmi <= (249 / 10)) {
    categories.innerHTML = `Normal Range`;
  } else if (bmi > (249 / 100)) {
    categories.innerHTML = `Over Weight`;
  }
})