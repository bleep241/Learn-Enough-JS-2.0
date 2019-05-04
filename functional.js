let states = ["kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "nort-dakota".
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(element => {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(state => urlify(state));
}
console.log(functionalUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let a = [];
  elements.forEach(element => {
    if (element.split(/\s+/).length === 1) {
      a.push(element);
    }
  })
  return a;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((acc, n) => acc += n);
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let length = {};
  elements.forEach(element => length[element] = element.length);
  return length;
};
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce(function(length, element) {
    length[element] = element.length;
    return length;
  }, {});
}
console.log(functionalLengths(states));
