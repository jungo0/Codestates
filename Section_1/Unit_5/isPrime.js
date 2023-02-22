/*
function isPrime(num) {
    if (num === 1) return false;  // 1은 소수가 아님
    for (let i = 2; i <= num - 1; i++) {  // 2부터 num-1까지의 수로 num을 나눈경우
      if (num % 2 === 0) return false; // 나머지가 0이면
    }
    return true; //나눠지지 않으면 num은 소수이다.
  }
*/
/*
  function isPrime(num) { // 1은 소수 x
    if (num === 1) return false; // 2부터 num제곱근까지의 수로 num을 나눈 경우
    for (let i = 2; i <= Math.sqrt(num); i++) {	// 나눠지는 경우가 한 번이라도 있으면 num은 소수 x
      if (num % 2 === 0) return false;
    }
    return true;  // 나눠지지 않으면 num은 소수
  }
  */