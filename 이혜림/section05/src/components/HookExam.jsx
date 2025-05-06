import useinput from "./../hooks/useinput"; // 오류 발생 -> hook 잘못도출
// 3가지 hook 관련된 팁
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출이 가능
//2. 조건부로 호출될 수는 없다 -> 조건문이나 반복문 내부에서 hook 호출
//3. 나만의 훅 (Custom Hook)을 직접 만들 수 있음

function useInput() {
  //getInput을 CustomHook으로 바꿔야 함
  const [input, setInput] = useState(""); //일반 javascript에서는 오류 발생

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}
const HookExam = () => {
  const [input, setInput] = useInput("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
