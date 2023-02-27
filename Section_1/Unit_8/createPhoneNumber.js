function createPhoneNumber(arr) {  
    let number = arr.length;
    let num1 = '(010)';
    let num2 = arr.slice(number - 8, number - 4).join('');
    let num3 = arr.slice(number - 4, number).join('');
  
      if (number === 11) {
      num1 = `(${arr.slice(0, 3).join('')})`;
    }
    return `${num1}${num2}-${num3}`;
  }
  
  
  