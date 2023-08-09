import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todolist from "../src/todoList/Todolist";
import Main from '../src/main/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/todoList" element={<Todolist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
