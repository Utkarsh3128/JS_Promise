const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise 1 completed");
    resolve();
  }, 4000);
});



promiseOne.then(function(){
    console.log("Promise 1 resolved")
})
