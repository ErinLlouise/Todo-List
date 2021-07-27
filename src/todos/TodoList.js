import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { isLoading } from './reducers'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos()
    }, [])
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
    isLoading: state.isLoading,
    todos: state.todos,
})

const mapDisptachToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id))
})

export default connect(mapStateToProps, mapDisptachToProps)(TodoList)
