import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools({})(applyMiddleware(thunk));

// const store = createStore(rootReducer, applyMiddleware(thunk))
// const store = createStore(rootReducer, {}, enhancer)

export default initStore => {
  return createStore(rootReducer, {}, enhancer)
}
