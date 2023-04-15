function add() {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  let result = parseInt(num1) + parseInt(num2);
  // console.log(result);

  let elementoutput = document.getElementsByClassName("output")[0];
  // console.log(elementoutput);
  elementoutput.innerHTML = `Addition is ${result}`
}


function sub() {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;

  let result = parseInt(num1) - parseInt(num2);
  // console.log(result)

  let elementoutput = document.getElementsByClassName("output")[0]
  elementoutput.innerHTML = `Subtraction is ${result}`;

}

function multiply() {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;

  let result = parseInt(num1) * parseInt(num2);
  console.log(result);
  let elementoutput = document.getElementsByClassName("output")[0]
  elementoutput.innerHTML = `<h1>Multiplication is ${result}<h1>`;

}

function division() {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;

  let result = parseInt(num1) / parseInt(num2);
  console.log(result);
  let elementoutput = document.getElementsByClassName("output")[0]
  elementoutput.innerHTML = `<h1>Division is ${result}<h1>`;

}