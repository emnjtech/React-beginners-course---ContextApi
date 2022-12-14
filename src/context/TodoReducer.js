import { ADD_TODO,DELETE_TODO,TOGGLE_TODO } from "./TodoAction";

export default function TodoReducer(state,action) {


switch(action.type){

    case ADD_TODO: 
    return {
        ...state,
        todos: [...state.todos,action.payload]
    }
    case TOGGLE_TODO: 
    return{
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload? {...todo, complete: !todo.complete} : {...todo} )
    }
   
    case DELETE_TODO:
        return{
            ...state,
            todos: state.todos.filter(todo =>todo.id !== action.payload)
        }

        default:
            return state
    
}
}