import React from 'react'
import ReactDom from 'react-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App'
import { Provider } from 'react-redux'
import { configureStore } from './store'

const store = configureStore()
const persistor = persistStore(store)

// renders App comp into root div in index.html
ReactDom.render(
    <Provider store={store}>
        <PersistGate 
            loading={<div>loading...</div>}
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'))
