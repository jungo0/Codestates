let obj = { firstName: "jungo", lastName: "m" };
let copiedObj = Object.assign({}, obj);

console.log(copiedObj) // { firstName: "jungo", lastName: "m" }
console.log(obj === copiedObj) // false