import React from 'react'


export default function TodoItem({text,itemDelete,toggle,complete}) {
    return (
      <div className="TodoItems">
        <div className="TodoItems__items" style={{color: complete? 'green' : ''}} >
          <p>{text}</p>
        </div>
        <div className="TodoItems__buttons">
          <button onClick={itemDelete} >Delete</button>
          <button onClick={toggle}>Toggle</button>
        </div>
        </div>
  )
}
