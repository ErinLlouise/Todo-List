import React from 'react'
import { connect } from 'react-redux'
import { removeTodo, markTodoAsCompleted } from './actions'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { isLoading } from './reducers'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
    const loadingMessage = <div>Loading Todos...</div>
    const content = (
        <div className='list-wrapper'>
            <NewTodoForm />
            {todos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}/>)}
        </div>
        )
        return isLoading ? loadingMessage : content // if isLoading = true we want to show the loading message, if it is not we want to show the content
    }

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDisptachToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps, mapDisptachToProps)(TodoList)
