// using catch to

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ userName: "utkarsh", password: 12345 });
    } else {
      reject("Error something went wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    return user.password;
  })
  .then((password) => {
    console.log(password);
  })
  .catch((error) => {
    console.log(error);   // code to run if there are any problems
  });
