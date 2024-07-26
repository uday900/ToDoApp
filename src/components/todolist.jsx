import { useSelector } from "react-redux"
import Todo from "./todo"
function TodoList(){
    const todos = useSelector((state)=>state )
    return <>
    <div className="container pt-1  bg-light border">
        {todos.map((todo)=><Todo title ={todo.title} key={todo.id} id = {todo.id}/>)}
        </div>
    </>
}export default TodoList