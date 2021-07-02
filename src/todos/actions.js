export const CREATE_TODO = 'CREATE_TODO'
// action creator function
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }, // this is the text of the new todo when this action is triggered
})
// the idea is that when we trigger this action from our components, 
// we will call this createTodo function (like this: createTodo(''))
// and pass it the text of our new todo --> createTodo('clean room)

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }, // the todos text that we want to remove
})

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED'
export const markTodoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text }
})

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS'
export const loadTodosInProgress = ()=> ({
    type: LOAD_TODOS_IN_PROGRESS
})

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS'
export const loadTodosSuccess = todos ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos },
})

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE'
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
})