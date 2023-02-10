/* 20. compressString

- 문제
문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

- 입력
인자 1 : str
string 타입의 알파벳 문자열

- 출력
string 타입을 리턴해야 합니다.

- 주의 사항
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
3개 이상 연속되는 문자만 압축합니다.
 */

function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = str[0];
  let chk = str[0];
  let temp = str[0];

  for(let i = 1; i < str.length; i++) {    
    if(result.length === 0 && chk === str[i]) result = '';
    if(chk === str[i]){
      temp += str[i]; 
      
      if(temp.length >= 3 && str[i+1] !== str[i]){
        result += temp.length + str[i]; 
        temp = '';
      }
    }

    else{ 
      result += str[i] 
    }
    chk = str[i]
  }
  return result;
}

function compressStringRef(str) {
  // 연속되는 문자를 기록하기 위한 변수
  // 첫 번째 문자로 초기화
  let before = str[0];

  // 동일한 문자의 반복 횟수
  let count = 1;

  // 정답으로 리턴할 문자열
  let result = '';

  // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
  str = str + ' ';
  for (let i = 1; i < str.length; i++) {
    // 동일한 문자가 반복될 경우
    if (before === str[i]) {
      count++;
    } else {
      // 이전과 다른 문자일 경우,
      // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
      if (count >= 3) {
        result = result + `${count}${before}`;
      } else {
        result = result + before.repeat(count);
      }
      before = str[i];
      count = 1;
    }
  }

  return result;
}


/* 입출력예시 */
let output = compressString('abc');
console.log(output); // --> abc

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p