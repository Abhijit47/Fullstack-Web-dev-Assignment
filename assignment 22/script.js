// console.log("Hello");

const timer = document.querySelector('.timer');

// function greet() {
//   console.log("Hello");
// }

// function msg(callback) {
//   console.log("Hello world");
//   callback();
// }

// msg(greet());

// Example 2
// function getData() {
//   setTimeout(() => {
//     const data = {
//       name: "Abhijit",
//       age: 28,
//     };
//     // console.log(data);
//     setData(data);
//   }, 3000);

// }

// function setData(data) {
//   setTimeout(() => {

//     console.log(data.name);
//   }, 200);

//   setTimeout(() => {

//     console.log(data.age);
//   }, 1000);
// }

// getData(setData);

// Example 3:
// function compute(num1, num2, callback) {
//   callback(num1, num2);
// }

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// function subs(num1, num2) {
//   console.log(num1 - num2);
// }

// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }

// function div(num1, num2) {
//   console.log(num1 / num2);
// }

// compute(10, 20, add);
// compute(10, 20, subs);
// compute(10, 20, multiply);
// compute(10, 20, div);

// const compute = (num1, num2, callback) => callback(num1, num2);

// const add = (num1, num2) => num1 + num2;
// const subs = (num1, num2) => num1 - num2;
// const multiply = (num1, num2) => num1 * num2;
// const div = (num1, num2) => num1 / num2;

// console.log(compute(10, 20, add));
// console.log(compute(10, 20, subs));
// console.log(compute(10, 20, multiply));
// console.log(compute(10, 20, div));


// 1st try out
// let setTime = 10;
// function countDown() {

//   setTimeout(() => {

//     if (setTime !== 0) {

//       console.log(setTime);
//       setTime--;
//       timer.innerHTML = setTime;
//     }

//     countDown();

//   }, 500);

// }
// countDown();



let time = 10;

function count10(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    time -= 1;
    callback();
  }, 500);

}

function count9(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    time -= 1;
    callback();
  }, 500);
}

function count8(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    time -= 1;
    callback();
  }, 500);
}

function count7(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    time -= 1;
    callback();
  }, 500);
}


function count6(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    time -= 1;
    callback();
  }, 500);
}

function count5(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    time -= 1;
    callback();
  }, 500);
}

function count4(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    time -= 1;
    callback();
  }, 500);
}

function count3(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    time -= 1;
    callback();
  }, 500);
}

function count2(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    time -= 1;
    callback();
  }, 500);
}

function count1(callback) {
  setTimeout(() => {
    console.log(time);
    timer.innerHTML = time;
    // time -= 1;
    callback();
  }, 500);
}

function count(callback) {
  setTimeout(() => {
    // if need zero then comment out this
    console.log(time - 1); // 0

    //else
    // console.log(time);
    timer.innerHTML = time;
    // time -= 1;
    callback();
  }, 500);
}

//Approach 1:
// count1(() => {
//   count2(() => {
//     count3(() => {
//       count4(() => {
//         count5(() => {
//           timer.innerHTML = "Hello People";
//         });
//       });
//     });
//   });
// });

// Approach 2:
// count5(() => {
//   count4(() => {
//     count3(() => {
//       count2(() => {
//         count1(() => {
//           console.log("Timer", time);
//           timer.innerHTML = "Hello People";
//         });
//       });
//     });
//   });
// });

// Approach 3:
// count5(function () {
//   count4(function () {
//     count3(function () {
//       count2(function () {
//         count1(function () {
//           timer.innerHTML = "Hello";
//         });
//       });
//     });
//   });
// });

// Approach 4:
count10(() => {
  count9(() => {
    count8(() => {
      count7(() => {
        count6(() => {
          count5(() => {
            count4(() => {
              count3(() => {
                count2(() => {
                  count1(() => {
                    count(() => {
                      timer.innerHTML = "Hello People";
                      // timer.getElementsByClassName(.)
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
