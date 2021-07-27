import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodoRequest } from './thunks'
import { getTodos } from './selectors'


const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [ inputValue, setInputValue ] = useState('')
    return (
    <div className='new-todo-form'>
        <input className='new-todo-input'
                type="text"
                placeholder="type your new todo here"
                value={inputValue}
                onChange={ e => setInputValue(e.target.value)}></input>
        <button 
                onClick={() => {
                    const isDuplicateText = 
                        todos.some(todo => todo.text === inputValue) // we want to check if any todos in our state is equal to the current input value
                        if (!isDuplicateText) {     // if there is no duplicate todo then we want to add a new todo
                            onCreatePressed(inputValue)
                            setInputValue('')
                        }
                }}
                className='new-todo-button'>Create Todo</button>
    </div>
)
    }

// the job of mapStateToProps is to take the state object and return another object
// containing the pieces of that state that our component needs access to
// we want our newTodoForm to have access to the newTodos in our state
const mapStateToProps = state => ({
    todos: getTodos(state),
})

// dispatch is a function that allows our components to trigger actions that our redux store will respond to
// e.g we want to create a redux action when the user clicks the create todo button
const mapDisatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
})
// we have passed our component a prop called onCreatePressed that takes an argument called text
// text calls the dispatch function which then calls the createTodo action

export default connect(mapStateToProps, mapDisatchToProps)(NewTodoForm)
