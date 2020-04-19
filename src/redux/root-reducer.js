import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';

// this can be used if you want to use Windows Storage, first step was in Store.JS
import storage from 'redux-persist/lib/storage';

// for SessionStorage
//import sessionStorage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']    // here user is not requied to be persist, we are focusing on Cart and Items
}

// convert this code as const becasue we need to export persistReducer
// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); // this is a function that returns our root reducer as well as config wih persist capability