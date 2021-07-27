import React from 'react'

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <div className='todo-item-container'>
        <h3>{todo.text}</h3>
        <div className='buttons-container'>
            {todo.isCompleted
                ? null
                : <button 
                        onClick={() => onCompletedPressed(todo.id)}
                        className='completed-button'>mark as completed</button>}
        <button 
                onClick={() => onRemovePressed(todo.id)}
                className='remove-button'>remove</button>
        </div>
    </div>
)

export default TodoListItem