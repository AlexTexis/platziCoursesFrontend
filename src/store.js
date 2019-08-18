import { createStore } from 'redux'
import { rootReducer } from './reducer/index'

export const store = createStore(rootReducer,{})