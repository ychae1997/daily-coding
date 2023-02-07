/* 18. numberSearch

- 문제
문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.

- 입력
인자 1 : str
string 타입의 문자열

- 출력
number 타입을 리턴해야 합니다 (0 이상의 정수)

- 주의 사항
빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
숫자(digit)는 연속해서 등장하지 않습니다.
*/

function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  let digit = '0123456789';
  let sum = 0;
  let divStr = ''
  if(str.length === 0) return 0
  for(let i = 0; i < str.length; i++) {
    if(digit.includes(str[i])){ // 숫자일 때
      sum += Number(str[i]);
    }else if(str[i] !== ' ') { // 숫자도 공백도 아닐 때
      divStr += str[i]
    }
  }
  return Math.round(sum / divStr.length)
}
/* 입출력예시 */
let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 2

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2