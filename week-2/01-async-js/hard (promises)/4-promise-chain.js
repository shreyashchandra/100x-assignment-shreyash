/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  let prom1 = new Promise((resolve) => {
    setTimeout(resolve, t * 1000);
  });
  return prom1;
}

function wait2(t) {
  let prom2 = new Promise((resolve) => {
    setTimeout(resolve, t * 1000);
  });
  return prom2;
}

function wait3(t) {
  let prom3 = new Promise((resolve) => {
    setTimeout(resolve, t * 1000);
  });
  return prom3;
}

function calculateTime(t1, t2, t3) {
  let start = Date.now();

  return wait1(t1).then(() => {
    return wait1(t2).then(() => {
      return wait1(t3).then(() => {
        return new Promise((resolve) => {
          let timeTaken = Date.now() - start;
          resolve(timeTaken);
        });
      });
    });
  });
}

module.exports = calculateTime;
