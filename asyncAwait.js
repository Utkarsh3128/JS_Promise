// In this example we will learn about async and await
// async makes a function return a Promise
// await makes a function wait for a Promise
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ language: "JavaScript", id: 211 });
    }else{
        reject("JavaScript is not working");
    }
  }, 4000);
});

async function consumeFive(){
    try{
        const response = await promiseFive; 
        console.log(response);
    } catch(error){
        console.log(error);
    }
} 

consumeFive();