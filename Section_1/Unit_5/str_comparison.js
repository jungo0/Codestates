/*동치
const str1 = 'Hello';
const str2 = 'Hello';

console.log(str1 === 'Hello'); // true
console.log(str1 === str2);    // true
*/

/*대소문자 구분없이 비교
const str1 = 'heLLo';
const str2 = 'Hello';

// 두 문자열을 대문자로 변환 후 비교
console.log(str1.toUpperCase() === str2.toUpperCase()); // true

// 두 문자열을 소문자로 변환 후 비교
console.log(str1.toLowerCase() === str2.toLowerCase()); // true
*/

/* incldue
const str1 = 'hello';
const str2 = 'hello';
const str3 = 'HeLLo';

// 일반적인 사용 방법
console.log(str1.includes(str2)); // true

// 대소문자 구분없이 비교하는 방법
console.log(str1.toUpperCase().includes(str3.toUpperCase())); // true
console.log(str1.toLowerCase().includes(str3.toLowerCase())); // true

*/

/*
// 일반적인 사용 방법
console.log('A'.localeCompare('B')); // -1
console.log('A'.localeCompare('A')); // 0
console.log('B'.localeCompare('A')); // 1

// 대소문자 구분없이 비교하는 방법
console.log('a'.toLowerCase().localeCompare('A'.toLowerCase())); // 0
console.log('a'.toUpperCase().localeCompare('A'.toUpperCase())); // 0

*/