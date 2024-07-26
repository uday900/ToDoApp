
import { useDispatch, useSelector } from "react-redux"

import './index.css'
import { useState } from "react"
import TodoList from "./components/todolist"
const ToDoListProject=()=>{
    const toDoList = useSelector((state)=> state)
    const dispatch = useDispatch()
    const [task, setTask] = useState("")
    const handleToDo = ()=>{
        dispatch({
            type: "addToDo",
            payload: task
        })
        setTask("")
    }
   return <>
    <div className="app container text-center">

        <form className="">
            <h2 className="text-info">ToDo App</h2>

            <div className="d-flex">
                <input type="text" className=" form-control" 
                    placeholder="enter your task"
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}
                    required
                />

                <button className="btn btn-info"
                    onClick={handleToDo} disabled= {task.length ==0}>Add
                </button>
                
             </div>
             
        </form>
        <TodoList/>
        
        
        
    </div>


    </>
}
export default ToDoListProject