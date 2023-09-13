// passing objects in Promises and using arrow function

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Utkarsh", age: 21, city: "Pune" });
  }, 3000);
}).then((user) => {
  console.log(user);
});
