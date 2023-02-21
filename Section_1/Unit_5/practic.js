let course = 'seb fe';
if (course === 'seb fe') {
  console.log('변수 course에 "seb fe"를 할당했습니다.');
}



let age = 25;
let job = 'sw engineer';
요.
if (age > 19 && job !== 'student') {
  console.log('조건을 만족합니다.');
}


let num = 3;
if (num <= 9 && num >= 2) {
  console.log(num * 1);
  console.log(num * 2);
  console.log(num * 3);
  console.log(num * 4);
  console.log(num * 5);
  console.log(num * 6);
  console.log(num * 7);
  console.log(num * 8);
  console.log(num * 9);
} else {
  console.log('2와 9사이의 수를 입력하세요.');
}

for (let i = 1; i <= 10; i++) {
	if (i % 2 === 1) {
		console.log(i);
	}
}


let str = 'software engineering bootcamp';

for (let i = 0; i < str.length; i++) {
	if (i % 2 === 0) {
		console.log(str[i]);
	}
}

for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`);
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }