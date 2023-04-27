console.log("hello");
const empData = [
  {
    "name": "Alonzo Rempel",
    "email": "Ryann_Krajcik29@gmail.com",
    "country": "Somalia",
    "department": "Grocery",
    "id": "1"
  },
  {
    "name": "Inez Schowalter",
    "email": "Lorine.Walter2@yahoo.com",
    "country": "Yemen",
    "department": "Beauty",
    "id": "2"
  },
  {
    "name": "Neal Bashirian",
    "email": "Royal_Russel63@hotmail.com",
    "country": "Tuvalu",
    "department": "Movies",
    "id": "3"
  },
  {
    "name": "Mr. Angel",
    "email": "angel@gmail.com",
    "country": "Florida",
    "department": "Cook",
    "id": "4"
  },
  {
    "name": "Everett Okuneva",
    "email": "Clinton.Murphy@yahoo.com",
    "country": "Anguilla",
    "department": "Automotive",
    "id": "5"
  },
  {
    "name": "Jeffery Morissette",
    "email": "Marques.Hansen@yahoo.com",
    "country": "Mayotte",
    "department": "Grocery",
    "id": "6"
  },
  {
    "name": "Anita Kozey",
    "email": "Jerry.Hermiston@yahoo.com",
    "country": "Moldova",
    "department": "Outdoors",
    "id": "7"
  },
  {
    "name": "Nelson Wintheiser",
    "email": "Antonetta_Mitchell@yahoo.com",
    "country": "Iraq",
    "department": "Health",
    "id": "8"
  },
  {
    "name": "Christie Littel",
    "email": "Mandy.Orn@gmail.com",
    "country": "Fiji",
    "department": "Shoes",
    "id": "9"
  },
  {
    "name": "Ram Suryavanshi",
    "email": "ram12@gmail.com",
    "country": "India",
    "department": "books 123",
    "id": "10"
  },
  {
    "name": "john",
    "email": "john@gmail.com",
    "country": "California",
    "department": "Novel",
    "id": "12"
  },
  {
    "name": "Jenny",
    "email": "jenny@gmail.com",
    "country": "Japan",
    "department": "Novel",
    "id": "13"
  },
  {
    "name": "Varuna Bansod",
    "email": "varuna@gmail.com",
    "country": "India",
    "department": "Mediator",
    "id": "14"
  },
  {
    "name": "Ram Susryawanshi",
    "email": "suryawanshiram2@gmail.com",
    "country": "india ,Pune",
    "department": "WEB Development ",
    "id": "15"
  },
  {
    "name": "Jack Watsica",
    "email": "Nelda33@yahoo.com",
    "country": "Montenegro",
    "department": "Health",
    "id": "16"
  },
  {
    "name": "Shelia Terry Sr.",
    "email": "Jadyn_Farrell49@yahoo.com",
    "country": "Mauritius",
    "department": "Electronics",
    "id": "17"
  },
  {
    "name": "Mrs. Lynne Stoltenberg",
    "email": "Rocio79@yahoo.com",
    "country": "El Salvador",
    "department": "Music",
    "id": "18"
  },
  {
    "name": "Randal Haley",
    "email": "Nova.Emard63@yahoo.com",
    "country": "Netherlands",
    "department": "Toys",
    "id": "19"
  },
  {
    "name": "Doug Murray III",
    "email": "Tanner_Robel32@hotmail.com",
    "country": "Gibraltar",
    "department": "Sports",
    "id": "20"
  },
  {
    "name": "Rick Schuppe",
    "email": "Clementina_Casper@hotmail.com",
    "country": "Ireland",
    "department": "Baby",
    "id": "21"
  },
  {
    "name": "Mrs. Veronica King I",
    "email": "Lavada_Reinger80@yahoo.com",
    "country": "Dominica",
    "department": "Books",
    "id": "22"
  },
  {
    "name": "Courtney Haley",
    "email": "Marion_Oberbrunner@yahoo.com",
    "country": "Iran",
    "department": "Jewelery",
    "id": "23"
  },
  {
    "name": "Marie Feest",
    "email": "Aniyah.Lang83@hotmail.com",
    "country": "Kuwait",
    "department": "Shoes",
    "id": "24"
  },
  {
    "name": "Katherine Bartoletti",
    "email": "Myrtis.Swaniawski37@yahoo.com",
    "country": "India",
    "department": "Music",
    "id": "25"
  },
  {
    "name": "Mindy Howell",
    "email": "Casey36@hotmail.com",
    "country": "Bahrain",
    "department": "Jewelery",
    "id": "26"
  },
  {
    "name": "Courtney Hegmann",
    "email": "Cathryn_Kozey91@gmail.com",
    "country": "Bulgaria",
    "department": "Jewelery",
    "id": "27"
  },
  {
    "name": "Sherry Mraz",
    "email": "Ismael.Lueilwitz@gmail.com",
    "country": "Sierra Leone",
    "department": "Grocery",
    "id": "28"
  },
  {
    "name": "Cynthia Hudson",
    "email": "Kip.Paucek32@gmail.com",
    "country": "Portugal",
    "department": "Tools",
    "id": "29"
  },
  {
    "name": "Patrick Wintheiser",
    "email": "Amos14@gmail.com",
    "country": "Chad",
    "department": "Tools",
    "id": "30"
  },
  {
    "name": "Justin Gutmann",
    "email": "Sonia.Nienow13@yahoo.com",
    "country": "Hong Kong",
    "department": "Beauty",
    "id": "31"
  },
  {
    "name": "Gloria Hessel",
    "email": "Chesley86@hotmail.com",
    "country": "Chad",
    "department": "Games",
    "id": "32"
  },
  {
    "name": "Emily Reinger",
    "email": "Nakia93@hotmail.com",
    "country": "Italy",
    "department": "Electronics",
    "id": "33"
  },
  {
    "name": "Kathryn O'Reilly",
    "email": "Kasey_Lubowitz@hotmail.com",
    "country": "Latvia",
    "department": "Beauty",
    "id": "34"
  },
  {
    "name": "Rodney Rohan DVM",
    "email": "Minerva_Blick53@hotmail.com",
    "country": "Virgin Islands, British",
    "department": "Automotive",
    "id": "35"
  },
  {
    "name": "Angelina Gleason",
    "email": "Graham86@hotmail.com",
    "country": "Cuba",
    "department": "Industrial",
    "id": "36"
  },
  {
    "name": "Cathy Schamberger",
    "email": "Nico52@gmail.com",
    "country": "Tonga",
    "department": "Automotive",
    "id": "37"
  },
  {
    "name": "Mrs. Paula Gleichner",
    "email": "Gerda_Heller@hotmail.com",
    "country": "Isle of Man",
    "department": "Electronics",
    "id": "38"
  },
  {
    "name": "Timmy Beier",
    "email": "Brandyn.Lemke99@yahoo.com",
    "country": "Greenland",
    "department": "Jewelery",
    "id": "39"
  },
  {
    "name": "Mr. Geraldine Rutherford",
    "email": "Martina_Legros77@hotmail.com",
    "country": "Virgin Islands, U.S.",
    "department": "Grocery",
    "id": "40"
  },
  {
    "name": "Carlos Bradtke",
    "email": "Junius21@yahoo.com",
    "country": "Czech Republic",
    "department": "Home",
    "id": "41"
  },
  {
    "name": "Suzanne Berge",
    "email": "Donald.Welch@hotmail.com",
    "country": "Israel",
    "department": "Outdoors",
    "id": "42"
  },
  {
    "name": "Kurt Upton",
    "email": "Ruthie.Breitenberg53@yahoo.com",
    "country": "Bahrain",
    "department": "Shoes",
    "id": "43"
  },
  {
    "name": "Annette Jacobson",
    "email": "Vicky.Kirlin@hotmail.com",
    "country": "Angola",
    "department": "Health",
    "id": "44"
  },
  {
    "name": "Pete McDermott",
    "email": "Kailyn_Kirlin54@yahoo.com",
    "country": "Mali",
    "department": "Industrial",
    "id": "45"
  },
  {
    "name": "Lewis Schmitt",
    "email": "Ellis78@hotmail.com",
    "country": "Congo",
    "department": "Jewelery",
    "id": "46"
  },
  {
    "name": "Douglas Steuber",
    "email": "Jess58@gmail.com",
    "country": "Mali",
    "department": "Books",
    "id": "47"
  },
  {
    "name": "Kathy Champlin",
    "email": "Lorna63@yahoo.com",
    "country": "Ethiopia",
    "department": "Toys",
    "id": "48"
  },
  {
    "name": "Clara Gutmann",
    "email": "Napoleon.Walter@yahoo.com",
    "country": "Western Sahara",
    "department": "Automotive",
    "id": "49"
  },
  {
    "name": "Heidi Gerlach",
    "email": "Royal43@gmail.com",
    "country": "Solomon Islands",
    "department": "Toys",
    "id": "50"
  },
  {
    "name": "Miss Cristina Bartoletti III",
    "email": "Cecile.Ratke@yahoo.com",
    "country": "Venezuela",
    "department": "Movies",
    "id": "51"
  },
  {
    "name": "Pamela Harvey",
    "email": "Lorine65@gmail.com",
    "country": "Tonga",
    "department": "Music",
    "id": "52"
  },
  {
    "name": "Gloria Jast",
    "email": "Martina_Mayer94@gmail.com",
    "country": "Monaco",
    "department": "Health",
    "id": "53"
  },
  {
    "name": "Myron McClure",
    "email": "Amos_Denesik@gmail.com",
    "country": "Russian Federation",
    "department": "Games",
    "id": "54"
  },
  {
    "name": "Todd Boehm",
    "email": "Unique.Kessler@yahoo.com",
    "country": "Gabon",
    "department": "Automotive",
    "id": "55"
  },
  {
    "name": "Austin Mohr",
    "email": "Sophia80@yahoo.com",
    "country": "Turkey",
    "department": "Movies",
    "id": "56"
  },
  {
    "name": "Armando Collins III",
    "email": "Ashtyn_Lind@gmail.com",
    "country": "Estonia",
    "department": "Sports",
    "id": "57"
  },
  {
    "name": "Kristin Steuber",
    "email": "Quincy.Adams@gmail.com",
    "country": "Bahamas",
    "department": "Health",
    "id": "58"
  },
  {
    "name": "Javier Zboncak",
    "email": "Georgianna_Conroy96@gmail.com",
    "country": "Montserrat",
    "department": "Sports",
    "id": "59"
  },
  {
    "name": "Noah Purdy Jr.",
    "email": "Shanon_Botsford@yahoo.com",
    "country": "Uruguay",
    "department": "Books",
    "id": "60"
  },
  {
    "name": "Marcia Franecki",
    "email": "Imani_Upton35@gmail.com",
    "country": "Virgin Islands, U.S.",
    "department": "Electronics",
    "id": "61"
  },
  {
    "name": "Toby Watsica",
    "email": "Alec62@yahoo.com",
    "country": "Colombia",
    "department": "Tools",
    "id": "62"
  },
  {
    "name": "Ryan Ondricka IV",
    "email": "Cristal14@gmail.com",
    "country": "Turks and Caicos Islands",
    "department": "Tools",
    "id": "63"
  },
  {
    "name": "Ms. Marianne DuBuque",
    "email": "Emmie_Willms@yahoo.com",
    "country": "Belize",
    "department": "Movies",
    "id": "64"
  },
  {
    "name": "Shelia Rogahn",
    "email": "Letitia_Feeney@gmail.com",
    "country": "Saint Lucia",
    "department": "Grocery",
    "id": "65"
  },
  {
    "name": "Lynda D'Amore",
    "email": "Amalia9@hotmail.com",
    "country": "Sao Tome and Principe",
    "department": "Shoes",
    "id": "66"
  },
  {
    "name": "Juanita Deckow",
    "email": "Freda_Sanford98@gmail.com",
    "country": "Cocos (Keeling) Islands",
    "department": "Industrial",
    "id": "67"
  },
  {
    "name": "Marvin Christiansen",
    "email": "Joyce69@hotmail.com",
    "country": "Bhutan",
    "department": "Shoes",
    "id": "68"
  },
  {
    "name": "Laura Rempel",
    "email": "Shanna.Roberts20@yahoo.com",
    "country": "Bhutan",
    "department": "Baby",
    "id": "69"
  },
  {
    "name": "Dale McCullough",
    "email": "Dena_Crooks97@hotmail.com",
    "country": "Bermuda",
    "department": "Books",
    "id": "70"
  },
  {
    "name": "Christy Huel",
    "email": "Abdiel_Gleason3@gmail.com",
    "country": "Slovenia",
    "department": "Health",
    "id": "71"
  },
  {
    "name": "Julie Williamson",
    "email": "Rubye93@hotmail.com",
    "country": "Isle of Man",
    "department": "Garden",
    "id": "72"
  },
  {
    "name": "Catherine Funk V",
    "email": "Ernest.Cassin@gmail.com",
    "country": "Croatia",
    "department": "Electronics",
    "id": "73"
  },
  {
    "name": "Wm Dooley",
    "email": "Andres15@gmail.com",
    "country": "Netherlands",
    "department": "Home",
    "id": "74"
  },
  {
    "name": "Della Wilderman",
    "email": "Mark_Nicolas@yahoo.com",
    "country": "Uzbekistan",
    "department": "Sports",
    "id": "75"
  },
  {
    "name": "Rudy Crist",
    "email": "Alverta_Will3@gmail.com",
    "country": "Monaco",
    "department": "Electronics",
    "id": "76"
  },
  {
    "name": "Edna Rowe",
    "email": "Russell.Nicolas@hotmail.com",
    "country": "Brunei Darussalam",
    "department": "Baby",
    "id": "77"
  },
  {
    "name": "Matthew Schaefer",
    "email": "Nelda3@gmail.com",
    "country": "Niue",
    "department": "Kids",
    "id": "78"
  },
  {
    "name": "Clifford Schiller",
    "email": "Lillie.Feest@gmail.com",
    "country": "Poland",
    "department": "Tools",
    "id": "79"
  },
  {
    "name": "Ernest Hirthe",
    "email": "Darius_Leannon@yahoo.com",
    "country": "Belgium",
    "department": "Health",
    "id": "80"
  },
  {
    "name": "Mr. Earl Cronin",
    "email": "Magnus_Bernier35@yahoo.com",
    "country": "United States Minor Outlying Islands",
    "department": "Garden",
    "id": "81"
  },
  {
    "name": "Laura Mante",
    "email": "Blair91@gmail.com",
    "country": "Algeria",
    "department": "Kids",
    "id": "82"
  },
  {
    "name": "Allen Prohaska II",
    "email": "Rosalee_Sauer86@hotmail.com",
    "country": "China",
    "department": "Automotive",
    "id": "83"
  },
  {
    "name": "Miss Kerry Wisozk",
    "email": "Orie_Larkin@hotmail.com",
    "country": "Macao",
    "department": "Music",
    "id": "84"
  },
  {
    "name": "Pete Sanford",
    "email": "Lessie_Brown59@yahoo.com",
    "country": "Timor-Leste",
    "department": "Garden",
    "id": "85"
  },
  {
    "name": "Mr. Olivia Wunsch",
    "email": "Ruthe.Boehm32@hotmail.com",
    "country": "Kenya",
    "department": "Clothing",
    "id": "86"
  },
  {
    "name": "Sylvia Fadel",
    "email": "Osbaldo86@hotmail.com",
    "country": "Suriname",
    "department": "Jewelery",
    "id": "87"
  },
  {
    "name": "Arnold Feeney",
    "email": "Winfield.Grant@hotmail.com",
    "country": "Cocos (Keeling) Islands",
    "department": "Kids",
    "id": "88"
  },
  {
    "name": "Rose Bayer",
    "email": "Chase.White8@hotmail.com",
    "country": "Macao",
    "department": "Health",
    "id": "89"
  },
  {
    "name": "Tomas Mosciski",
    "email": "Coralie_McLaughlin1@gmail.com",
    "country": "Libyan Arab Jamahiriya",
    "department": "Health",
    "id": "90"
  },
  {
    "name": "Peter Gottlieb",
    "email": "Jaydon.Upton@hotmail.com",
    "country": "Trinidad and Tobago",
    "department": "Industrial",
    "id": "91"
  },
  {
    "name": "Henry Langosh",
    "email": "Letitia25@yahoo.com",
    "country": "Saint Barthelemy",
    "department": "Automotive",
    "id": "92"
  },
  {
    "name": "Virginia Hilll",
    "email": "Dean_Mitchell@hotmail.com",
    "country": "Liechtenstein",
    "department": "Kids",
    "id": "93"
  },
  {
    "name": "Daniel Krajcik",
    "email": "Thaddeus.Russel12@hotmail.com",
    "country": "Latvia",
    "department": "Computers",
    "id": "94"
  },
  {
    "name": "Mr. Lisa Bartoletti",
    "email": "Claude26@hotmail.com",
    "country": "Canada",
    "department": "Outdoors",
    "id": "95"
  },
  {
    "name": "Anne Kemmer",
    "email": "Rocio_Hills@hotmail.com",
    "country": "Barbados",
    "department": "Music",
    "id": "96"
  },
  {
    "name": "Jamie Hintz",
    "email": "Kieran.Robel@hotmail.com",
    "country": "Albania",
    "department": "Movies",
    "id": "97"
  },
  {
    "name": "Earnest Abbott",
    "email": "Adolfo35@gmail.com",
    "country": "Japan",
    "department": "Grocery",
    "id": "98"
  },
  {
    "name": "Laurence Medhurst",
    "email": "Bertha34@yahoo.com",
    "country": "El Salvador",
    "department": "Clothing",
    "id": "99"
  },
  {
    "name": "Dave Bernhard",
    "email": "Ramona_Anderson@gmail.com",
    "country": "Nepal",
    "department": "Music",
    "id": "100"
  },
]
// Get all references
const cardSection = document.querySelector('.card-section');
const empId = document.querySelector('.id');
const empName = document.querySelector('.name');
const empEmail = document.querySelector('.email');
const empCountry = document.querySelector('.country');
const empDept = document.querySelector('.dept');

// all btns references
const btnFirst = document.querySelector('.btn-first');
const btnPrev = document.querySelector('.btn-prev');
const btn_1 = document.querySelector('.btn-1');
const btn_2 = document.querySelector('.btn-2');
const btn_3 = document.querySelector('.btn-3');
const btnNext = document.querySelector('.btn-next');
const btnLast = document.querySelector('.btn-last');


let data;

let startValue = 0;
let endValue = 10;

// Testing purpose:
// data = empData.slice(startValue, endValue).map((emp) => {
//   // console.log(startValue, endValue);
//   const template = `
//       <div class="card" style="width: 18rem">
//           <div class="card-body">
//             <h5 class="card-header-pills id">Id: ${emp.id}</h5>
//             <h5 class="card-title name">Name: ${emp.name}</h5>
//             <p class="card-text email">Email: ${emp.email}</p>
//             <p class="card-text country">Country: ${emp.country}</p>
//             <p class="card-text dept">Dept.: ${emp.department}</p>
//           </div>
//       </div>
//   `
//   return cardSection.insertAdjacentHTML('beforeend', template);
// });

/*
  0-9
  10-20
  21-30
  31-40
  41-50
  51-60
  61-70
  71-80
  81-90
  91-100
  
  */

// Initial Stage of this page
const initialData = () => {
  console.log("loading");
  showData(0, 10);
}

window.addEventListener('load', initialData);

const showData = (start = 0, end = 0) => {
  data = empData.slice(startValue = start, endValue = end).map((emp) => {
    // console.log(startValue, endValue);
    const template = `
      <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-header-pills id">Id: ${emp.id}</h5>
            <h5 class="card-title name">Name: ${emp.name}</h5>
            <p class="card-text email">Email: ${emp.email}</p>
            <p class="card-text country">Country: ${emp.country}</p>
            <p class="card-text dept">Dept.: ${emp.department}</p>
          </div>
      </div>
  `
    return cardSection.insertAdjacentHTML('beforeend', template);
  });

}

const getAtFirstData = () => {
  console.log("Top Prev data");

  if ('active' in btnPrev.classList === false) {
    btnFirst.classList.add('active');
    btnPrev.classList.remove('active');
    btn_1.classList.remove('active');
    btn_2.classList.remove('active');
    btn_3.classList.remove('active');
    btnNext.classList.remove('active');
    btnLast.classList.remove('active');
  }

  if (startValue === 0 && endValue === 10) return;

  showData(0, 10);
}

const getPrevdata = () => {
  console.log("Prev data");

  if ('active' in btnPrev.classList === false) {
    btnFirst.classList.remove('active');
    btnPrev.classList.add('active');
    btn_1.classList.remove('active');
    btn_2.classList.remove('active');
    btn_3.classList.remove('active');
    btnNext.classList.remove('active');
    btnLast.classList.remove('active');
  }

  if (startValue === 0 && endValue === 10) return;

  showData(0, 10);

}

const getFirstPage = () => {
  console.log("First page");

  if ('active' in btnFirst.classList === false) {
    btnFirst.classList.remove('active');
    btnPrev.classList.remove('active');
    btn_1.classList.add('active');
    btn_2.classList.remove('active');
    btn_3.classList.remove('active');
    btnNext.classList.remove('active');
    btnLast.classList.remove('active');
  }

  if (startValue === 0 && endValue === 10) return;

  showData(0, 10)

}

const getSecondPage = () => {
  console.log("Button 2");

  if ('active' in btn_2.classList === false) {
    btnFirst.classList.remove('active');
    btnPrev.classList.remove('active');
    btn_1.classList.remove('active');
    btn_2.classList.add('active');
    btn_3.classList.remove('active');
    btnNext.classList.remove('active');
    btnLast.classList.remove('active');
  }

  if (startValue === 11 && endValue === 20) return;

  showData(11, 20);

}

const getThirdPage = () => {
  console.log("Thid button");

  if ('active' in btn_2.classList === false) {
    btnFirst.classList.remove('active');
    btnPrev.classList.remove('active');
    btn_1.classList.remove('active');
    btn_2.classList.remove('active');
    btn_3.classList.add('active');
    btnNext.classList.remove('active');
    btnLast.classList.remove('active');
  }

  if (startValue === 21, endValue === 30) return;

  showData(21, 30);

}

const getNextData = () => {
  console.log("Next data");

  if ('active' in btnNext.classList === false) {
    btnFirst.classList.remove('active');
    btnPrev.classList.remove('active');
    btn_1.classList.remove('active');
    btn_2.classList.remove('active');
    btn_3.classList.remove('active');
    btnNext.classList.add('active');
    btnLast.classList.remove('active');
  }

  console.log(startValue, endValue);

  /*
  31-40
  41-50
  51-60
  61-70
  71-80
  81-90
  
  */
  const res = empData.slice(31, 40);
  console.log(res);

  // if (startValue === 33 && endValue === 43) return;


  showData(31, 40);
}

const getLastData = () => {
  console.log("Last data");

  if ('active' in btnLast.classList === false) {
    btnFirst.classList.remove('active');
    btnPrev.classList.remove('active');
    btn_1.classList.remove('active');
    btn_2.classList.remove('active');
    btn_3.classList.remove('active');
    btnNext.classList.remove('active');
    btnLast.classList.add('active');
  }

  console.log(empData.length); //99

  startValue = empData.length - 9; //89
  endValue = empData.length; //99

  showData(startValue, endValue);

}


btn_1.addEventListener('click', getFirstPage);
btn_2.addEventListener('click', getSecondPage);
btn_3.addEventListener('click', getThirdPage);


btnFirst.addEventListener('click', getAtFirstData);
btnPrev.addEventListener('click', getPrevdata);
btnNext.addEventListener('click', getNextData);
btnLast.addEventListener('click', getLastData);



