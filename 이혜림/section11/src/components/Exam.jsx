import { useReducer } from "react";
//reducer: 변환기
//-> 상태를 실제로 변화시키는 변환기 역할

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
  //   console.log(state, action);
  //   if (action.type === "INCREASE") {
  //     return state + action.data;
  //   }
  //   else if(action.type === "DECREASE") {
  //     return state - action.data;
  //   } //if문보다는 swtich문이 일반적
}

const Exam = () => {
  //dispatch : 발송하다, 급송하다
  //-> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    //-> 액션 객체
    dispatch({
      //상태변화요청
      type: "INCREASE", //값을 증가시켜달라고 요청
      data: 1, //데이터를 1만큼 증가시켜달라고 요청
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
