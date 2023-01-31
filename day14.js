/* 14. superIncreasing

- 문제
수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

- 입력
인자 1 : arr
수를 요소로 갖는 배열
arr[i]는 정수

- 출력
boolean 타입을 리턴해야 합니다.
arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.
*/

function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let sum = arr[0]
  let result;
  for(let i = 1; i < arr.length; i++) {
    if(sum < arr[i]) {
      result = true;
      sum += arr[i]
    }else {
      return false;
    }
  }
  return result;
}

// 레퍼런스 코드
// false case를 if로 두고, 별도의 resul변수없이 for문이 끝나면 true를 리턴했다.
function superIncreasingRef(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= sum) {
      return false;
    }
    sum = sum + arr[i];
  }
  return true;
}


/* 입출력예시 */
let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false