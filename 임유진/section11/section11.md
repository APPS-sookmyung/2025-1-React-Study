# 1. Context란

- `React Context`: 컴포넌트간의 데이터를 전달하는 또 다른 방법, 기존의 Props가 가지고 있던 단점을 해결할 수 있음
- Props Drilling: 상위 컴포넌트에서 계속해서 하위 컴포넌트로 넘어가는 과정

# 2. Context 사용하기

`export const TodoContext = createContext(reducer, mockData);`
-> Context를 이용해 코드를 수정했더니 최적화가 풀린 것 처럼 보인다...
-> TodoContext.Provider에서 props가 바뀌면 리렌더링이 발생하기 때문

# 3. Context 분리하기

- 변경될 수 있는 값(todos)과 변경되지 않는 값(onCreate, onUpdate, onDelete)를 분리
