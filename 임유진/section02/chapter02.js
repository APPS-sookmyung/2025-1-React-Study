//단락 평가: 비교 연산에서 연산의 경우에 따라 일부만 연산

function returnFalse(){
    console.log("False 함수");
    return undefined; //연산 결과: undefined
}

function returnTrue() {
    console.log("True 함수");
    return 10; //연산 결과: 10
}

console.log(returnFalse() && returnTrue()); 
//False 출력되는 이유: 첫 번째 피연산자 만으로도 and 연산을 실행할 수 있기 때문

console.log(returnTrue() || returnFalse());
//마찬가지로 or 연산에서 첫 번째 피연산자가 참이었으니 True만 출력

//단락 평가 활용 사례
function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음음");
}

printName();
printName({name:"임유진"});

// T1||T2 -> T1, T1&&T2 -> T2 