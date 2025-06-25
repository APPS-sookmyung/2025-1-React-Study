import "./App.css";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];
//복잡한 코드가 될때에는 useReducer를 사용하는 것이 좋음
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
// context 생성은 component 외부에 생성

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배여렝서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
  }, []);

  // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
  // setTodos(todos.filter((todo) => todo.id !== targetId));
  // 삭제 대상이 아닌 요소들만 필터링됨
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []); // 리렌더링이 발생되도 최적화 발생하지 않음
  const memoizedDispatch = useMemo(() => {
    //useMemo 사용 안하면 리렌더링될떄마다 객체가 다시 생성됨 - useMemo로 방지
    return { onCreate, onUpdate, onDelete };
  }, []);
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
} //todos라는 state가 바로 공급 - 배열을 담았다고 생각하기

export default App;
