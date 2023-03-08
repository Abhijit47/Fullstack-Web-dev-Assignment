const elem = document.getElementById("faq_ans");
const btnClose = document.querySelector('.close');
const icon = document.getElementById('faq-icon');
console.log(elem.classList);
console.log(elem.classList.length);

btnClose.addEventListener('click', (e) => {

  if (!elem.classList.length === 2) {
    icon.setAttribute("name", "add-outline");
  }

  elem.classList.toggle("closed");
  icon.setAttribute("name","close-outline");

  
})


// function openClose() {
//   elem.classList.remove("closed");

//   if (!val === 'closed') {
//     console.log("nothing");
//   }
// }
