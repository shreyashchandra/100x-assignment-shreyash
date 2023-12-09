/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var str3 = str1.replace(" ", "").toLowerCase();
  var str4 = str2.replace(" ", "").toLowerCase();

  if (str3.length !== str4.length) {
    return false;
  }

  var freq = new Array(26).fill(0);

  for (var i = 0; i < str3.length; i++) {
    freq[str3.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[str4.charCodeAt(i) - "a".charCodeAt(0)]--;
  }
  console.log(freq);

  for (var i = 0; i < freq.length; i++) {
    if (freq[i] !== 0 || freq[i] == "NaN") {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
