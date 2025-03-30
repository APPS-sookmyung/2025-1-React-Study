//JavaScript에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가함
//이때 참 같은 값: Truthy 한 값, 거짓 같은 값: Falsy 한 값

//1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN; //Not a Number
let f6 = "";
let f7 = 0n; //매우 큰 수 저장, 특수형

//2. Truthy 한 값
// -> 7가지의 Falsy 한 값을 제외한 나머지 모든 값
let t1 = "Hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

//3. 활용 사례
function printName(person){
    if(!person){ //person값이 없을 경우 본 조건문 실행 -> 오류 발생 방지
        console.log("person의 값이 없음");
        return; 
    }
    console.log(person.name);
}

let person = {name: "임유진"}; //객체를 정의하지 않았다면 undefiend -> 거짓
printName(person);