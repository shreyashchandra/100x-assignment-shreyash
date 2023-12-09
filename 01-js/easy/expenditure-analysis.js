/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(trn) {
  let map1 = new Map();
  // Map => {'key', value}
  // map.has('key') => is that key present or not
  // map.get("key") => fetch the value of that key
  // map.set('key', value) => sets the key and vaue or you can pass it in the map.

  for (let i = 0; i < trn.length; i++) {
    if (map1.has(trn[i].category)) {
      map1.set(trn[i].category, map1.get(trn[i].category) + trn[i].price);
    } else {
      map1.set(trn[i].category, trn[i].price);
    }
  }

  // Map.entries() => map get coverted ino an Array - map[]
  // [category, totalSpent] this method destructured the array into objects with key and

  const obj = Array.from(map1.entries(), ([category, totalSpent]) => ({
    category,
    totalSpent,
  }));

  return obj;
}
module.exports = calculateTotalSpentByCategory;
