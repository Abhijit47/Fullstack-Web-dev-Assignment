/**
 * INDIA->
1.Country name ✔
2.Currency->currency  name -Indian Rupee ✔
3.Capital->New Delhi ✔
4.Region->Asia ✔
5.Language->English,Hindi,Tamil ✔
Population:1380004385 ✔
6.Country Flag image url->png ✔
 */

let card = document.querySelector('.card');
console.log(card);


const xhr = new XMLHttpRequest();
let data;
xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    // console.log(data);

    data.forEach((el, i) => {
      const currencies = el.currencies;
      const languages = el.languages;
      console.log(`Data: ${i}`);
      console.log("Name: ", el.name.common);

      // Currencies start
      let currency;
      for (const currKey in currencies) {
        currency = currencies[currKey];
        console.log(`Currency Code: ${currKey}`);
      }

      let curr;
      for (const key in currency) {
        curr = currency[key];
        console.log(`"${key}" : "${curr}"`);
      }
      // Currency end

      // Capital start
      if (!el.capital) {
        console.log("Capital Not found")
      }
      else {
        console.log("Capital: ", el.capital[0]);
      }
      // Capital end

      // Region
      console.log(`Region: ${el.region}`);

      // Languages
      for (const key in languages) {
        console.log(`Lang code: ${key} || Language: ${languages[key]}`);
      }

      // Population
      console.log(`Population: ${el.population}`);

      // Country flag start
      console.log(`Country flag`);
      for (const key in el.flags) {
        const element = el.flags[key];
        // if (key === 'alt') continue; // skip alt 
        console.log(`"${key}" : ${element}`);
      }
      // Country flag end
      console.log('----------------------------------------------------');

      /*
      card.insertAdjacentHTML('afterend', `
        <div class="card">
          <div class="card__img">
            <img src=${el.flags.svg} alt="countrycard" class="image" />
          </div>
          <h2 class="card__heading">Name: ${el.name.common}</h2>
          <p class="card__currency">Currency: ${curr}</p>
          <p class="card__capital">Capital: ${el.capital[0]}</p>
          <p class="card__region">Region: ${el.region}</p>
          <p class="card__languages">Language: ${languages}</p>
          <p class="card__population">Population: ${el.population}</p>
        </div>
      `)
      */
    })
    // Whole data loop end
  }
  // xhr condition end
};
//xhr responce end

// Initiates the request.
xhr.send();



