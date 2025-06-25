import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header);

// 최적화 : 히나의 프로젝트를 거의 완성한 상태에서 최적화, 기능 구현 후 최적화 하는 것이 좋음
// 최적화가 필요할 것 같은 연산, 함수, 컴포넌트에 적용하는 것이 좋음
// ex) todoitem component, 코드가 무거운 component 등
