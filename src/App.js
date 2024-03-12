import "./Todoo.css";
import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import "./Buttonn.css";
import "./inputt.css";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";
import "./TodoFooter.css"
import "./TodoForm.css"
import "./TodoList.css"



function App() {  
  const [todos, setTods] = useState([
    // {
    //   id: Math.random(),
    //   text: "GTH",
    //   isCompleted: false
    // },
    // {
    //   id: Math.random(),
    //   text: "GTQ",
    //   isCompleted: false
    // },
    // {
    //   id: Math.random(),
    //   text: "GTB",
    //   isCompleted: false
    // }
  ]
  )

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoForm onAdd={(text) => {
        setTods([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ])
      }} />

      <TodoList todos={todos} 
        onDelete={(todo)=>{setTods(todos.filter((t)=>t.id !== todo.id));  
        }}
       onChange={(newTodo)=>{
       setTods(todos.map((todo)=>{
          if(todo.id === newTodo.id){
            return newTodo;
          }
          return todo;
        }));
       }}
      />

      <TodoFooter todos={todos} onClearCompleted ={()=>{
        setTods(todos.filter((todo) => !todo.isCompleted)  
        );
      }}/>
    </div>
  );
}

export default App;
