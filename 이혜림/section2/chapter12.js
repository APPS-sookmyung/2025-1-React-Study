// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout{() => {
        const food = "떡볶이";
        callback(food);
    }, 3000};
    }

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownFood = '식은 ${food}';
    }, 2000);
}

function freezefood(food){
    setTimeout(() => {
        const freezefood = '냉동된 ${food}';
    }, 1500);
}

orderFood((food) => {
    console.log(food);
    
    cooldownFood(food, (cooldownFood) => {
        console.log(cooldownedFood);

        freezefood(cooldownFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});
