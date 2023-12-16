/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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

async function calculateTime(t1, t2, t3) {
  let s1 = Date.now();
  await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  let timeTaken = Date.now() - s1;

  return timeTaken;
}

module.exports = calculateTime;
