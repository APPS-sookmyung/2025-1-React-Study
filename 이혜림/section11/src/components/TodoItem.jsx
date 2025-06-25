import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox} // onchange라는 eventhandler를 사용한다
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

//고차 컨포넌트(HOC):한번 호출하는 것만으로도 컴포넌트의 새로운 기능 구현이 가능
// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// }); //반환값에 따라 prop가 바뀌었는지, 바뀌지 않았는지 판단
// // T -> props가 바뀌지 않음 -> 리렌더링 x
// // F -> props가 바뀜 -> 리렌더링 o

export default memo(TodoItem);
