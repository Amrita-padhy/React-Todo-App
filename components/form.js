import React from "react";

const Form = ({todos,setTodos,setInputText,inputText,setStatus}) => {

// function

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    }


const submitTodoHandler = (e) =>{
e.preventDefault()
setTodos([
    ...todos,{
        text :inputText,
        completed:false,
        id:Math.random()*1000
    }
])
setInputText("")
}
const statusHandler = (e) => {
    setStatus(e.target.value);
}



return (
<form>
<input   value={inputText} onChange={inputTextHandler} type="text"className="todo-input" />
<button disabled={!inputText.length} onClick={submitTodoHandler} className="todo-button" type="submit">
<i className="fa fa-plus-square"></i>
</button>
<div className="select">
    <select onClick={statusHandler} name="todos" className="filter-todo">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
    </select>
</div>
</form>

)

}


export default Form