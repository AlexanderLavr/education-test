import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { homeReducer } from './home/home.reducer';



export default function configStore(initialState){
  const enhancer = composeWithDevTools(applyMiddleware(thunk))
  const store = createStore(homeReducer, initialState, enhancer);
  return store
}