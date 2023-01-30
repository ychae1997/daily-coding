/* 7. convertListToObject

- 문제
2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.

- 입력
인자 1 : arr
배열을 요소로 갖는 배열
arr[i]는 string 타입을 요소로 갖는 배열
arr[i].length는 0 또는 2

- 출력
arr[i]의 첫 번째 요소를 키, 두 번째 요소를 값으로 하는 객체를 리턴해야 합니다.

- 주의 사항
중복되는 키의 경우, 초기의 값을 사용합니다.
빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
arr[i]의 길이가 0인 경우, 무시합니다.
*/


function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let obj = {}
  arr.map(e => {
    if(e.length && e[0] in obj === false) {
      // 값이 있고, 0번째요소(= key)가 기존의 객체에 없으면 추가 (중복된 값은 초기의 값을 사용해야하므로)
      obj[e[0]] = e[1]
    }
  });
  return obj
}

/* 입출력 예시 */
const arr = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', '1964'],
  ['make', 'Bill'],
];

let output = convertListToObject(arr);

console.log(output) /* -->
{
  make : 'Ford'
  model : 'Mustang',
  year : '1964'
}*/