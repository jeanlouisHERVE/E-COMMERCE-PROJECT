import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; 

const store = createStore(rootReducer, applyMiddleware(...middlewares)); 

export default store;

//Problem with redux-persist V6

// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import logger from 'redux-logger';
// import rootReducer from './root-reducer';
// import storage from 'redux-persist/lib/storage'

// const middlewares = [logger];

// const persistConfig = { // configuration object for redux-persist
//   key: 'root',
//   storage, // define which storage to use
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(
//   rootReducer, 
//   persistedReducer,
//   applyMiddleware(...middlewares));

// const persistor = persistStore(store);

// export default store
// export { persistor }