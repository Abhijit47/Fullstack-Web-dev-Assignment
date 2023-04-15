// Get All Element References
const btn = document.getElementsByClassName('btn')[0];
const show = document.getElementsByClassName('show')[0];
const inputValue = document.getElementById('input-value');

const inputBox = document.querySelector('.input');
const afterElem = window.getComputedStyle(inputBox, "::after");





function calcSize() {
  const countLength = inputValue.value.length;
  console.log(countLength);

  if (countLength === 0) {
    return
  } else {
    show.innerText = `Count: ${countLength}`;
  }

}

function clearInput() {
  inputValue.value = '';
}

btn.addEventListener('click', calcSize);
inputBox.addEventListener('click', clearInput);
