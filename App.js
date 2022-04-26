import React,{useState,useEffect} from 'react';
import './App.css';
// import
import Form from './components/form';
import TodoList from './components/todoList';

function App() {
// use state
const [inputText,setInputText] = useState("");
const [todos,setTodos] = useState([]);
const [status,setStatus]  = useState("All")
const [filteredTodo,setFilteredTodo]  = useState([])

// useeffect
useEffect(() => {
  filterHandler()
},[todos,status])


const filterHandler = () =>{
  switch (status) {
    case "Completed":
      const data = todos.filter((todo => todo.completed))
      console.log(data);
      setFilteredTodo(data)
      break;
      case "Uncompleted":
        setFilteredTodo(todos.filter((todo => !todo.completed)))
        break;
        default:
          setFilteredTodo(todos)
      break;
  } 
}


  return (
    <div className="App">
      <header>
      <h1>Minuu`Todo List</h1>
      </header>
      <Form inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus=
      {setStatus}
      />
      <TodoList todos={todos}
      setTodos={setTodos}
      filteredTodo={filteredTodo}
      setStatus=
      {setStatus}
      />
    </div>
  );
}

export default App;
