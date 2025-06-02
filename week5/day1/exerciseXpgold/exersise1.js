const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//Promise.all() waits for all promises (or values) in the array to
//resolve and returns their results in order, but if any promise rejects, it immediately fails with that error.