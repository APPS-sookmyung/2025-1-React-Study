import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  //이벤트 핸들러
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        {/* props 전달 */}
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
