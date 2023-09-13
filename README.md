## Promises in JavaScript
- *Definition:* A JavaScript ```Promise``` object contains both the producing code and calls to the consuming code
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