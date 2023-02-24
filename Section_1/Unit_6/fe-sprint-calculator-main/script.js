const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  n1 = Number(n1);
  n2 = Number(n2);
  
  if(operator === '+'){
    result = n1 + n2
  }else if(operator === '-'){
    result = n1 - n2
  }else if(operator === '*'){
    result = n1 * n2
  }else if(operator === '/'){
    result = n1 / n2
  }
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {   //계산기의 버튼을 누른경우 조건문
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') { //숫자를 클릭했을때 화면상에 그숫자가 보이도록 한다, 클릭한 HTML 엘리먼트의 클래스 이름이 'number'인 조건문
      console.log('숫자' + buttonContent + '버튼')
      if(firstOperend.textContent !== '0'){   //첫번째가 0이 아니면 이미 숫자가 입력된상태 --> 두번째에 입력
        secondOperend.textContent = buttonContent
      }else{
        firstOperend.textContent = buttonContent  //첫번째에 입력
      }
    }


    if (action === 'operator') {      //연산자 버튼을 클릭했을때 operator클래스의 조건문 
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator.textContent = buttonContent    //연산자값을 할당
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }



    if (action === 'clear') {   // 각각 할당한 값에 0을 입력시킴, operator는 기존값 +
      console.log('초기화 버튼');
      firstOperend.textContent = 0
      secondOperend.textContent = 0
      calculatedResult.textContent = 0
      operator.textContent = '+'
    }
    
      if (action === 'calculate') {   //function calculate를 이용, n1(첫번째숫자), n2(두번째숫자), operator_(연산자)를 전달인자로
        console.log('계산 버튼');
        let n1 = Number(firstOperend.textContent)
        let n2 = Number(secondOperend.textContent)
        let operator_ =operator.textContent
        calculatedResult.textContent = calculate(n1,operator_,n2)
      }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;
//firstNum: 계산되기 이전의 숫자, operatorForAdvanced: 연산 기호를 할당, previousKey: 이전에 입력한숫자(키,버튼), previousNum: 계산되기 이전의 숫자
buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      if(display.textContent === '0' || previousKey === 'operator'){      //기존에 0 존재하면 대체하고, previousKey가 operator일때 다음숫자 값을 입력
        display.textContent = buttonContent;
      }
      else if(display.textContent !== '0'){   //기존에 숫자가 0이 아니면 그 뒤에 입력한 숫자를 추가
        display.textContent += buttonContent;
      }
      if (previousKey === `operator`){    //previousKey가 operator일때 다음숫자 값을 입력
        display.textContent === buttonContent;
      }
      previousKey = 'number'
    }

    if (action === 'operator') {
      firstNum = display.textContent    //firstNum에 화면에 표시된 숫자 저장(계산되기 이전의 숫자)
      operatorForAdvanced = buttonContent   //operatorForAdvanced 에 연산자 저장
      previousKey = 'operator';
    }

    if (action === 'decimal') {}


    if (action === 'clear') {   //AC버튼을 클릭하면 display값은 0이 되고, firstNum에 저장된 값과 operator가 없어짐, undeifned(정의되지않음)
      display.textContent = '0'
      firstNum = undefined
      previousNum = undefined
      operatorForAdvanced = undefined
      previousKey = 'clear'
    }


    if (action === 'calculate') {
      if(previousNum !== 'calculate'){    //이전키가 calculate(Enter)가 아닐때 
        previousNum = display.textContent     //화면에 보이는 숫자(계산되기 이전 숫자(두번째))를 previousNum에 저장
        display.textContent = calculate(firstNum,operatorForAdvanced,previousNum);
        previousKey = 'calculate'
      }
      else if(previousKey ==='calcutate'){      //이전키가 calculate(Enter)면  지금 화면에 보이는 숫자를 firstnum에 재할당 후 다시 계산
        firstNum = display.textContent;   //첫번째 숫자
        display.textContent = calculate(firstNum,operatorForAdvanced,previousNum);
      }
     }
  }

});


