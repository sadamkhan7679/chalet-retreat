import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose, Store} from 'redux'
import rootReducer from '../store/reducers/rootReducer'

// Persisting Redux Store as Next.js refresh pages and we need to maintain state...
let devtools, store: Store
const isClient = typeof window !== 'undefined'
if (isClient) {
  const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const identity = <T>(t: T) => t
  devtools = process.browser && composeEnhancers ? composeEnhancers() : identity // identity function

  const {persistStore, persistReducer} = require('redux-persist')
  const storage = require('redux-persist/lib/storage').default
  const persistConfig = {
    key: 'chalet-root',
    storage,
    blacklist: ['propertySearch', 'searchFilters'],
  }

  store = createStore(
    persistReducer(persistConfig, rootReducer),
    compose(applyMiddleware(thunk), devtools),
  )

  // store.__PERSISTOR = persistStore(store);
  // @ts-ignore
  const persistor = persistStore(store)
} else {
  store = createStore(rootReducer, compose(applyMiddleware(thunk)))
}

export default store

export type RootState = ReturnType<typeof store.getState>

// import { createWrapper } from 'next-redux-wrapper';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from 'redux-persist/lib/storage';
// import reducer from "../store/reducers/rootReducer";

// const middlewares = [thunk];

// const makeConfiguredStore = (reducer: any) =>
//   createStore(reducer, undefined, applyMiddleware(...middlewares));

// const makeStore = () => {
//   const isServer = typeof window === 'undefined';

//   if (isServer) {
//     return makeConfiguredStore(reducer);
//   }

//   const persistConfig = {
//     key: 'josu',
//     storage: AsyncStorage,
//     whitelist: ['user', 'meeting', 'notifications'], // make sure it does not clash with server keys
//   };

//   const persistedReducer = persistReducer(persistConfig, reducer);
//   const store = makeConfiguredStore(persistedReducer);

//   // @ts-ignore
//   store.__persistor = persistStore(store); // Nasty hack
//   // @ts-ignore
//   window.store = store;

//   return store;
// };

// export const wrapper = createWrapper(makeStore);
