import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import ingredientsReducer from './reducers/ingredientsReducer'
import recipesReducer from './reducers/recipesReducer'

const reducers = combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
  reducers, 
  allStoreEnhancers
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
