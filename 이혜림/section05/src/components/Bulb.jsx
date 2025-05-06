import { useState } from "react";
const Bulb = () => {
  const [light, setLight] = useState("OFF");
  //자식 컴퍼넌트들은 부모로부터 받는 props의 값이 바뀔 때 마다 리렌더링
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        oClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
