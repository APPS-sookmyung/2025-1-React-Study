//1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

//이미미 저장된 객체를 수정하는 건 문제X
animal.age = 2; //추가
animal.name = "까망이" // 수정
delete animal.color; //삭제

//2. 메서드
//-> 값이 함수인 프로퍼티

const person = {
    name: "임유진",
    //메서드 선언
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi()
person["sayHi"]();