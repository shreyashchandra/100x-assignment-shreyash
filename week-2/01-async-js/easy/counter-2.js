function count(num) {
  console.log(num);

  if (num >= 0) {
    setTimeout(() => {
      count(num - 1);
    }, 1000);
  }
}

count(10);
