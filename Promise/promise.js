// // Create a promise that will resolve after 5 sec
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     return resolve({ status: 200, msg: "promise  resolved" });
//   }, 5000);
// });

// // setTimeout(() => {
// //   console.log(promise);
// // }, 6000);

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Promise.resolve("I am a resolved promise").then((res) => {
//   console.log(res);
// });

const newPromise = Promise.resolve("promise");

async function example(promise) {
  try {
    const res = await promise;
    return res;
  } catch (e) {
    console.error(e);
  } finally {
    console.log("Task done");
  }
}
const r = example(newPromise);
console.log(r);
example(newPromise).then((res) => {
  console.log({ res });
});

// promise all

// takes an array of promise
// return promise if all fulfilled
// or returns the first failed promise
// const myPromiseAll = function
