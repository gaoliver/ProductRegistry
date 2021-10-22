import { combineReducers } from 'redux';

import { ProductReducer } from './productReducer';
import { UserReducer } from './userReducer';

export const rootReducer = combineReducers({
    productReducer: ProductReducer,
    userReducer: UserReducer,
});

export type ApplicationReducer = ReturnType<typeof rootReducer>;
