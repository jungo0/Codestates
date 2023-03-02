const arr = [1, 2, [3, 4]];
const copiedArr = JSON.parse(JSON.stringify(arr));

console.log(arr); // [1, 2, [3, 4]]
console.log(copiedArr); // [1, 2, [3, 4]]
console.log(arr === copiedArr) // false
console.log(arr[2] === copiedArr[2]) // false