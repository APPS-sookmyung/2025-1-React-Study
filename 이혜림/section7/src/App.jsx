import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 3가지의 라이프사이클
  // 1. 마운트 : 탄생 (최초로 한번 실행시키고 싶은 코드가 있을 경우)
  useEffect(() => {
    console.log("mount");
  }, []);
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value); //비동기로 동작 -> console.log 쓰면 호출만 되고 완료가 된 것은 아님
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
