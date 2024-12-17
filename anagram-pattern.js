function isAnagram(pattern1, pattern2) {
  if (pattern1.length !== pattern2.length) return false;
  let pattern1Obj = {};
  let pattern2Obj = {};
  for (let item of pattern1) {
    pattern1Obj[item] = (pattern1Obj[item] || 0) + 1;
  }
  for (let item of pattern2) {
    pattern2Obj[item] = (pattern2Obj[item] || 0) + 1;
  }

  for (const key in pattern1Obj) {
    if (!(key in pattern2Obj)) {
      return false;
    }
    if (pattern1Obj[key] !== pattern2Obj[key]) return false;
  }

  return true;
}

function anagramValidation(pattern1, pattern2) {
  if (isAnagram(pattern1, pattern2)) {
    console.log("Valid Anagaram");
  } else {
    console.log("InValid Anagaram");
  }
}

anagramValidation("cat", "act"); // Valid Anagram
anagramValidation("cat", "mat"); // Invalid Anagram
