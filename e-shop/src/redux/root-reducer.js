import { combineReducers } from 'redux'; 

import userReducer from '../redux/user/user.reducer';
import cartReducer from '../redux/cart/cart.reducer';

export default combineReducers ({
  user: userReducer,
  cart: cartReducer
})

//Problem with redux-persist V6

// import { combineReducers } from 'redux'; 
// import { persistReducer} from 'redux-persist';
// import { storage } from 'redux-persist/lib/storage';

// import userReducer from '../redux/user/user.reducer';
// import cartReducer from '../redux/cart/cart.reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart']
// };

// const rootReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer
// });

// export default persistReducer(persistConfig, rootReducer);