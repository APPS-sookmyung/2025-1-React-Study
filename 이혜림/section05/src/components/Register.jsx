import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    //컴포넌트가 리렌더링 된다고 해도 reset 되지 않음
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
};
const countRef = useRef(0);
const inputRef = useRef();

let count = 0; //count 변수의 값이 1로 고정

//비슷한 이벤트들을 간결하고 깔끔하게 처리 가능
const onChange = (e) => {
  //이벤트 객체를 매개변수로 받아줌
  // countRef.current++;
  count++;
  console.log(count);
  setInput({
    ...input, //스프레드 연산자로 기존 Input의 값을 나열
    [e.target.name]: e.target.value, //e.target.name의 프로포티의 키로 설정
  });
};

const onSubmit = () => {
  if (input.name === "") {
    //이름을 입력하는 DOM 요소 포커스
    inputRef.current.focus(); // focus 매소드 호출
  }

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
