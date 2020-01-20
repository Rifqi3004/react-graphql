import {  createStore } from 'redux'
import reducers from "./reducers"
import midlewares from "./middlewares"
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, reducers)  

export const store = createStore(persistedReducer,midlewares)
export const persistor = persistStore(store)
