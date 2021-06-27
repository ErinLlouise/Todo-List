import React from 'react'
import { connect } from 'react-redux'
import { removeTodo, markTodoAsCompleted } from './actions'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <div className='list-wrapper'>
        <NewTodoForm />
        {todos.map(todo => <TodoListItem 
            todo={todo} 
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}/>)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDisptachToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps, mapDisptachToProps)(TodoList)
