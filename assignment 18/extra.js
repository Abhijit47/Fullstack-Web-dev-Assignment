/*
var xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET", "https://restcountries.com/v3.1/all")

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);

    data.forEach((el) => {
      console.log(typeof el);
      for (const key in el.currencies) {
        if (Object.hasOwnProperty.call(el, key)) {
          const element = el[key];
          console.log(element);
        }
      }


      if (el.capital[0]) {
        console.log("Capital", el);
      } else {
        console.log(el);
      }

    });
  }
}
xhr.send();
*/


// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     //data is available->Business Logic
//     var data = JSON.parse(xhr.responseText);
//     console.log(data);//displayed data in console
//     //Apply a looping logic
//     //loop in response to above data and print it using template literal
//     for (var i = 0; i < data.length; i++) {
//       console.log(
//         `USER ID: ${ data[i].id }
//                   NAME: ${data[i].name}
//                   EMAIL: ${data[i].email}
//                 `
//       );
//     }
//   }
// }


// //Open a method
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.send();