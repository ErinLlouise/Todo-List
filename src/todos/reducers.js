import { CREATE_TODO, MARK_TODO_AS_COMPLETED, REMOVE_TODO } from "./actions"

// any time an action is fired from anywhere is our application, our reducer function gets called
// when this happens, the two arguments that gets passed to our reducer is the current state of 
// whatever resource our reducer is managing ( in this case it is an array of the current todos in our app)
// and the second is an action that is triggered which will be an object with type and payload properties

// so, what reducers do is they take the current state, and the action that was triggered, and decides
// what changes should occur in the state as a result of this action
// it should then return the updated state and redux will take this return value, and set the current state to that
export const todos = (state = [], action) => {
    const { type, payload } = action

    // the switch block looks at the type of action and decides what to do 
    // we use the switch block to make the todos reducer respond correctly to our createTodo and removeTodo actions
    switch (type) {
        case CREATE_TODO: {
            const { text } = payload
            const newTodo = {
                text,
                isCompleted: false,
            }
            return state.concat(newTodo)
        }
        case REMOVE_TODO: {
            const { text } = payload
            // return the state with the todo that we want removed filtered out
            return state.filter(todo => todo.text !== text)
        }
        case MARK_TODO_AS_COMPLETED: {
            const { text } = payload
            return state.map(todo => {
                if (todo.text === text) {
                    return {...todo, isCompleted: true}
                }
                return todo
            })
        }
        // we must return the state even if no changes are made to it
        // otherwise redux will think it is undefined and will throw an error
        default:
            return state
    }
}