function add(a, b, callback){
    setTimeout(()=>{
        const sum = a + b; //3
        callback(sum);
    }, 3000);
}

add(1, 2, (value)=>{console.log(value);});

//1. add 함수가 호출되면서 setTimeout 함수 호출
//2. setTimeout은 callback 함수를 3초 뒤에 실행
//3. 3초 뒤에 실행된 callback 함수에서 sum 계산
//4. 매개 변수에서 받은 callback 함수가 다시 실행되며 sum 전달
//-> setTimeout 함수가 끝나면 callback 함수가 다시 실행되는 것

//음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food); //console.log(food);
    }, 3000);
};

function cooldownFood(food,callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood); //식은 떡볶이 출력
    }, 2000);
};

function freezeFood(food,callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    },1500);
};

orderFood((food)=> {
    console.log(food);

    cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood,(freezedFood)=>{
            console.log(freezedFood);
        });
    });
});