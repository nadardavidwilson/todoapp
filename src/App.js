import React, { useState } from "react";
import './App.css';
import Form from "./components/form"
import Todolist from "./components/todolist"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
    return (
    <div className="App">
      <header>
      <h1>David's Todo List </h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <Todolist setTodos={setTodos} todos={todos} />

    </div>
  );
}

export default App;
