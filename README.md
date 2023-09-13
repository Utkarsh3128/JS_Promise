## Promises in JavaScript

- _Definition:_ A JavaScript `Promise` object contains both the producing code and calls to the consuming code
- JavaScript Promise are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
- Promises are used to handle asynchronous operations in JavaScript.

**Syntax**

```
let promise = new Promise((resolve, reject){
    // block of code
});
```

### Promise Object Properties

A JavaScript Promise object can be:

- Pending: Promise is still pending i.e. not fulfilled or rejected yet
- fulfilled: Action related to the promise succeeded
- rejected: Action related to the promise failed

**Promise Consumer** Promises can be consumed by registering functions using _.then_ and _.catch_ methods

1. Promise then() method: It is invoked when a promise is either resolved or rejected.
   **Syntax**

```
.then(function(result){
        //handle success
}, function(error){
        //handle error
})
```

2. Promise catch() method: It is invoked when a promise is either rejected or some error has occurred in execution.
   **Syntax**

```
.catch(function(error){
        //handle error
})
```
