import React from "react";
import Todo from "./todo";



const TodoList = ({ todos, setTodos, filteredTodo }) => {
    // console.log(todos);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodo.map((todo) => (
                        <li>
                            <Todo text={todo.text}
                                key={todo.id}
                                setTodos={setTodos}
                                todos={todos}
                                todo={todo} />
                        </li>

                    ))
                }
                
            </ul>
        </div>
    )



}


export default TodoList