//1. Number type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

//2. String Type
let myName = "ㅎㅎ";
let myLocation = "ㅇㅇ";
let introduce=myLocation+myName;

let introduceText =`${myName}은 ${myLocation}에 거주합니다`; //$사인을 이용하여 변수를 유동적으로 사용 가능
console.log(introduceText); //템플릿 리터럴 문법

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type (아무것도 없음)
let empty = null;

//5. Undefiend Type
let none;
console.log(none); //undefiend는 자동으로 명시되지만 null은 개발자가 직접 선언해줘야함
