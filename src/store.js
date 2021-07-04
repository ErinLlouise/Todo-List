import { createStore, combineReducers, applyMiddleware } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import { todos, isLoading } from './todos/reducers'

const reducers = {
    todos,
    isLoading,
}

const persistConfig = {
    key: 'root',
    storage, // defaults to local storage on web
    stateReconciler: autoMergeLevel2, // tells redux-persist how to reconcile the inital and stored states of our app
}

// puts our reducers into a form that we can pass to the createStore function
const rootReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => 
    createStore(
        persistedReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
        )
