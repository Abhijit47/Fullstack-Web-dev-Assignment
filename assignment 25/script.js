
let fName = '', lName = '', eMail = '', age = '';
let dataObj = {
  fName,
  lName,
  eMail,
  age,
};
// Get all References:
const form = document.querySelector('.form');
const queryFname = document.querySelector('.fname');
const queryLname = document.querySelector('.lname');
const queryEmail = document.querySelector('.email');
const queryAge = document.querySelector('.age');

const submitBtn = document.querySelector('.btn');
const clrBtn = document.querySelector('.clr-btn');

const tableBody = document.querySelector('.table-body');
// console.dir(tableBody);

let userInfo = [];

// when window load show the prev data
// const domLoad = () => {
//   userInfo = JSON.parse(localStorage.getItem('user'));
//   console.log(userInfo);
// }
// window.addEventListener('DOMContentLoaded', domLoad)

const getData = () => {
  dataObj.fName = queryFname.value;
  dataObj.lName = queryLname.value;
  dataObj.eMail = queryEmail.value;
  dataObj.age = queryAge.value;
}

const setData = () => {

  // guard class for prevent add a new row
  if (dataObj.fName === '' || dataObj.lName === '' || dataObj.eMail === '' || dataObj.age === '') return;


  // get input keys
  const keys = Object.keys(dataObj);
  // console.log(keys);

  // get input values
  let values = Object.values(dataObj);
  // console.log(values);

  userInfo.push(dataObj);

  // set to local storage
  // localStorage.setItem('user', JSON.stringify(userInfo));

  // create tr element
  const trElem = document.createElement('tr');
  // trElem.classList.add('table-row');

  // loop through create td elements according to data
  for (let i = 0; i < Object.keys(dataObj).length; i++) {
    // const element = Object.keys(dataObj)[i];
    // console.log(element);

    // create td element
    let tdElem = document.createElement('td');

    // create textnode
    let textnode = document.createTextNode(values[i]);

    // append textnode to td
    tdElem.appendChild(textnode);

    // append td to tr
    trElem.appendChild(tdElem);

    // append tr to tbody
    tableBody.appendChild(trElem);
  };

  // reset the input cell
  queryFname.value = '';
  queryLname.value = '';
  queryEmail.value = '';
  queryAge.value = '';

  // after submitting reset obj data
  dataObj.fName = ''
  dataObj.lName = ''
  dataObj.eMail = ''
  dataObj.age = '';
}

const deleteData = () => {
  localStorage.removeItem('user');
}

form.addEventListener('change', getData);

submitBtn.addEventListener('click', setData);

clrBtn.addEventListener('click', deleteData);


// set data to local storage
// Converts a JavaScript value to a JavaScript Object Notation(JSON) string.
// const localStorage = localStorage.setItem('user', JSON.stringify("values"));

// console.log(localStorage);

// const data = JSON.parse(localStorage.getItem('user'))

// Converts a JavaScript Object Notation (JSON) string into an object.
// console.log(data);


// const tableRow = document.querySelector('.table-row');
// console.log(tableRow);
// console.dir(tableRow);

/*
const trElem = document.createElement('tr');
// console.dir(create_tr);
trElem.classList.add('table-row');

for (let i = 0; i < Object.keys(dataObj).length; i++) {
  const element = Object.keys(dataObj)[i];
  // console.log(element);
  let tdElem = document.createElement('td');
  // console.log(tdElem);

  let textnode = document.createTextNode(element);
  // console.log(textnode);

  // const getClass = tableRow.children[i].classList[0];
  // console.log(getClass);
  // tdElem.classList.add(getClass);

  tdElem.appendChild(textnode);
  // console.log(tdElem);

  tableRow.appendChild(tdElem);
  tableBody.appendChild(tableRow, tdElem)
}
console.dir(tableRow);
*/























/*
const container = document.querySelector('.container');
console.dir(container);
console.log(container);

// const btn1 = document.querySelector('.btn-1');
// console.log(btn1);

// const btn2 = document.querySelector('.btn-2');
// console.log(btn2);

// const btn3 = document.querySelector('.btn-3');
// console.log(btn3);

const allBtns = document.querySelectorAll('.btn');
console.dir(allBtns);

const modal = document.querySelector('.modal');
console.dir(modal);

function trigger() {
  console.log("trigger");
}

allBtns.forEach(btn => {
  btn.addEventListener('click', trigger);
});
*/

