//1. 변수
let age = 27; //변수 선언 및 초기화
console.log(age);

age=30; //중복 선언 안됨.
console.log(age);

//2. 상수
const birth = "1977.01.07"; //값을 바꿀 수 없음, 초기화 없으면 오류

//3. 변수 명명규칙(네이밍 규칙)
//3-1. $, _를 제외한 기호는 사용할 수 없음
let $_name;

//3-1. 숫자로 시작할 수 없음
let name1;
let $1name;

//3-3. 예약어를 사용할 수 없음(ex. let, if...)

//4. 변수 명명 가이드
let SalesCount = 1;
let RefundCount = 1;
let totlaSalesCount = SalesCount + RefundCount; //알아보기 쉽게!!