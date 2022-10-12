import TodoContext from "./TodoContext";
import { useReducer } from "react";
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './TodoAction'
import TodoReducer from "./TodoReducer";



export default function TodoState(props) {

const initialState = {
    todos: [] //id, text, toggleValue
}

function addTodo(todo) {
    dispatch({
        type:ADD_TODO,
        payload: todo
    })
}

function deleteTodo(todoID) {
    dispatch({
        type:DELETE_TODO,
        payload:todoID
    })
}

function toggleTodo(todoID) {
    dispatch({
        type:TOGGLE_TODO,
        payload: todoID
    })
}

const [state,dispatch] = useReducer(TodoReducer,initialState)
    return(
        <TodoContext.Provider value={{
            todos: state.todos,
            deleteTodo,
            addTodo,
            toggleTodo,
        }}>
       {props.children}
        </TodoContext.Provider>
    )
}