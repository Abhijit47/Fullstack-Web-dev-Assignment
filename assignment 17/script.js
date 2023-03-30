/**
 * 1.Write a logic to reverse string of yourname
John Doe
eoD nhoJ
 */

//Write a logic to reverse string of yourname

const myName = 'Abhijit Karmakar';
console.log(myName);
// method 1
const reversedName = myName.split('').reverse().forEach(el => { console.log(el) });

// method 2
// const reversedName = myName.split("").reverse().join();
// console.log(reversedName);

/**
 * 2.Write a logic to print all prime number from 2 to 50
 */


// prime number 2 to 50
for (let i = 2; i <= 50; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("Prime Number", i);
  }
}