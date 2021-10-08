import { ProductModel } from '../../utils/types';
import { ProductAction } from '../actions/productActions';

type ProductStateModel = {
    listProducts: Array<ProductModel>;
};

const initialState: ProductStateModel = {
    listProducts: []
};

export const ProductReducer = (
    state: ProductStateModel = initialState,
    action: ProductAction
) => {
    switch (action.type) {
        case 'ON_GET_LIST_PRODUCTS':
            return {
                ...state,
                listProduct: action.payload
            };
    }
    return initialState;
};
