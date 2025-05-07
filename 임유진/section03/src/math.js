// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// module.exports ={
//     add,
//     sub,
// }

export default function multiply(a, b) {
  //math 모듈을 대표하는 디폴트 값
  return a * b;
}
