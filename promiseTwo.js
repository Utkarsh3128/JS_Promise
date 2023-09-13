// using .then with promise

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise 2 completed");
    resolve();
  }, 4000);
}).then(function () {
  console.log("Promise 2 resolved");
});
