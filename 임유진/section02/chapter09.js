//5가지 배열 변형 메서드
//1.filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "가", hobby: "테니스"},
    {name: "나", hobby: "테니스"},
    {name: "다", hobby: "독서"},
];

const tennisPeople = arr1.filter((item)=item.hobby==="테니스");


//2. map
//배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item,idx,arr)=>{
    console.log(idx,item);
    return item*2;
});

let names = arr1.map((item)=>item.name);


//3.sort
//배열을 '사전순'으로 정렬하는 메서드
let arr3  = ["b", "a", "c"]; //숫자는 정상적인 정렬X
arr3.sort();
let Newarr3 = [10, 3, 5];
Newarr3.sort((a,b)=>{ //return 값을 수정하여 내림차순 정렬도 가능
    if(a>b){
        return 1; //b,a 배치
    }else if(a<b){
        return -1; // a,b 배치
    }else {
        return 0; //자리 그대로 유지
    }
});

//4. toSorted
//정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "happy"];
const joined = arr6.join(" "); //구분자
console.log(joind);