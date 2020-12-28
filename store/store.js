import { createStore, applyMiddleware, combineReducers } from 'redux'
// eslint-disable-next-line no-unused-vars
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import counter from './counter/reducer'

//COMBINING ALL REDUCERS
const combinedReducer = combineReducers({
  counter
  // OTHER REDUCERS WILL BE ADDED HERE
})

// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(combinedReducer, bindMiddleware([thunkMiddleware]))
  } else {
    const { persistStore, persistReducer } = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default

    const persistConfig = {
      key: 'nextjs',
      whitelist: ['counter'],
      storage
    }

    const persistedReducer = persistReducer(persistConfig, combinedReducer)

    const store = createStore(persistedReducer, bindMiddleware([thunkMiddleware]))

    store.__persistor = persistStore(store)

    return store
  }
}

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore)
