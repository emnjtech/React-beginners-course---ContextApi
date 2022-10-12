import React from 'react'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList() {


  const {todos,deleteTodo,toggleTodo} = useContext(TodoContext)
  

    return (    
      <div>
        {todos.map(item => (
          <TodoItem
          key={item.id}
          text={item.text}
          complete={item.complete}
          itemDelete ={() =>deleteTodo(item.id)}
          toggle= {() => toggleTodo(item.id)}
          />
        ))}

          
        </div>
  )
}
