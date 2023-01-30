/* 3. powerOfTwo

- 문제
수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

- 입력
인자 1 : num
number 타입의 정수 (num >= 1)

- 출력
boolean 타입을 리턴해야 합니다.

- 주의 사항
반복문(while)문을 사용해야 합니다.
2의 0승은 1입니다.
Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.
*/

function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  let powNum = 2;

  // 2의 0승은 1
  if(num === 1) return true

  // 홀수일 때 무조건 false
  if(num % 2) return false 

  // 기준값이 입력 받은 값보다 작을때만 반복.
  while(powNum < num) powNum = powNum * 2;

  // 기준값과 입력받은 값이 같을 때(2의 제곱일 때) true
  if(powNum === num) return true
  else return false
}

// 레퍼런스 코드
function powerOfTwoRef(num) {
  if (num === 1) {
    return true;
  }

  if (num % 2) {
    return false;
  }

  let powered = 2;
  while (powered < num) {
    powered = powered * 2;
  }

  // 굳이 if else를 쓰지 않고 바로 리턴해도 됨
  return powered === num;
}


/* 입출력예시 */
let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false