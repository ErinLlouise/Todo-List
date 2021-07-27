import { 
    createTodo, 
    removeTodo, 
    loadTodosInProgress, 
    loadTodosSuccess, 
    loadTodosFailure,
    markTodoAsCompleted, 
} from "./actions"

// as soon as our load todos thunk is triggered, were going to dispatch the load todos in progress action

// dispatch argument - used to dipatch other actions from inside our thunk - we will use this to communicate
// to the rest of our app in regards to how the loading process is going
// getState is function we can use to get access to the current state of the redux store

export const loadTodos = () => async (dispatch, getState) => {
    // the try catch block is to ensure proper loading - if nothing loads from our server, we dispatch our loadtodosfailure
    try {
        dispatch(loadTodosInProgress())
        const response = await fetch('http://localhost:8080/todos')
        const todos = await response.json()
        // ^^ standard logic for server requests
    
        // dispatch the loadtodossuccess action with the loaded todos we have recieved from the server
        dispatch(loadTodosSuccess(todos))
    } catch (e) {
        dispatch(loadTodosFailure())
        dispatch(displayAlert(e))
    }
}

export const addTodoRequest = () => async dispatch => {
    try {
        const body = JSON.stringify({ text })
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/JSON',
            },
            method: 'post',
            body,
        })
        const todo = await response.json()
        dispatch(createTodo(todo))
    }
    catch (e) {
        dispatch(displayAlert(e))
    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        })
        const removedTodo = await response.json
        dispatch (removeTodo(removedTodo))
    } catch (e) {
        dispatch(displayAlert(e))
    }
}

export const markTodoAsCompletedRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post'
        })
        const updatedTodo = await response.json
        dispatch (markTodoAsCompleted(updatedTodo))
    } catch (e) {
        dispatch(displayAlert(e))
    }
}

export const displayAlert = text => () => {
    alert(text)
}
