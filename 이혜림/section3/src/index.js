// const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));
// common.js에서 moduleData 대신 add, sub

import mul, { add, sub } from "./math.js";

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
// es module system (확장자까지 명시)

// node_modules나 package-lock.json 파일이 없어질 경우 npm i를 입력하여 다시 설치 가능
// nomodules 폴더 함께 공유 x
