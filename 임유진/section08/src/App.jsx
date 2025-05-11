import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";

const mockData = [
  {
    id: 0,
    isdone: false,
    content: "React 공부하기",
    date: new Data().getTime(),
  },
  {
    id: 1,
    isdone: false,
    content: "밥 먹기",
    date: new Data().getTime(),
  },
  {
    id: 2,
    isdone: false,
    content: "잠 자기",
    date: new Data().getTime(),
  },
];

function App() {
  const [todo, setTodos] = useState(mockData);

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
