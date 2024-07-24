import React from 'react'
import Todo from './Todo'
import './Home.css'
//import Completed from './Completed'
import { useState } from 'react'
export default function Home() {
const [todoList, setTodoList] = useState([]);
//const [compList, setCompList] = useState([]);
const [task, setTask] = useState ('');
function handleOnChange (e) { setTask(e.target.value); }
function handleOnClick() {
if (task) {
setTodoList(todoList.concat (task));
setTask('');
}
}
return(
    <>
    <div className="todo">
        
<h1><b><u>My To-do List</u></b></h1>
<input type = 'text'
value={task}
onChange={handleOnChange}
>
</input>
<button onClick={handleOnClick}>Add Task</button>
<Todo todoList={todoList}/>
</div>
</>
)
}
