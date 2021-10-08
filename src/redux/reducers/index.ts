import { combineReducers } from 'redux';

import { ProductReducer } from './productReducer';

export const rootReducer = combineReducers({
    productReducer: ProductReducer
});

export type ApplicationReducer = ReturnType<typeof rootReducer>;
