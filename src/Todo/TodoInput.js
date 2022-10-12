import React from 'react'
import {useState} from 'react'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'

export default function TodoInput() {

  const [todoInput, setTodoInput] = useState("")
  const {addTodo} = useContext(TodoContext)

  const newTodo = {
    id: Math.random(),
    text:todoInput,
    complete: false
  }

  function onSubmitHandler(e){
    if (todoInput ==="") {
      alert("Textbox is empty, enter a value")
    }
    else{
      e.preventDefault()
      addTodo(newTodo)
      setTodoInput("")
    }
   

  }
  return (

    <div>
      <div className='InputTxt'>
        <input type="text" placeholder='Enter Todo' value={todoInput} onChange={(e) =>setTodoInput(e.target.value)}/> 
      </div>
      <button className='button' onClick={onSubmitHandler}>Add Todo</button>
      </div>
  
  )
}
