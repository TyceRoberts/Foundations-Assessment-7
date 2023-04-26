const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

// 0(n^2)

// 0(n^2)

const hasUniqueChars = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};
console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

const isPangram = (str) => {
  str = str.toLowerCase().split("");

  const alphabet = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let i = 0; i < str.length; i++) {
    if (alphabet[str[i]] === 0) {
      alphabet[str[i]] += 1;
    }
  }

  for (let key in alphabet) {
    if (alphabet[key] === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// 0(n)

const findLongestWord = (arr) => {
  let longestWord = 0;

  arr.forEach((word) => {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  });
  return longestWord;
};

console.log(findLongestWord(["hi", "hello"]));
// -> 5

// 0(n)
