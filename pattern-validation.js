function patternValidate(pattern) {
  let stack = [];
  for (let index = 0; index < pattern.length; index++) {
    const currentString = pattern[index];
    if (
      currentString === "(" ||
      currentString === "{" ||
      currentString === "["
    ) {
      stack.push(currentString);
      continue;
    }
    if (!stack.length) return false;
    let popString = stack.pop();
    switch (currentString) {
      case ")":
        if (popString === "{" || popString === "[") return false;
        break;
      case "}":
        if (popString === "(" || popString === "[") return false;
        break;
      case "[":
        if (popString === "(" || popString === "{") return false;
        break;
    }
  }
  return !stack.length;
}

function validateThePattern(pattern) {
  if (patternValidate(pattern)) {
    console.log("Valid pattern");
  } else {
    console.log("Invalid pattern");
  }
}

validateThePattern("{[](]"); //invalid pattern
validateThePattern("{[()]}"); //valid pattern
validateThePattern("{[]}()[]{[{}]}"); //valid pattern
