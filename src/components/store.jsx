import { createStore } from "redux";

const todos = []
var count = 2

function reducer(state = todos, action){
    switch(action.type){
        case "addToDo":
            const newToDo = {id: count, title: action.payload}
            count +=1;
            return [...state, newToDo]

        case "deleteToDo":
            return state.filter((todo)=> todo.id !== action.payload
            )            
        default: return state
    }
}
const store = createStore(reducer)
export default store;