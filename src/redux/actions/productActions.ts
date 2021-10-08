import { Dispatch } from 'react';
import { ProductModel } from '../../utils/types';

export interface GetListProducts {
    readonly type: 'ON_GET_LIST_PRODUCTS';
    payload: Array<ProductModel>;
}

export interface ErrorActionProduct {
    readonly type: 'ON_PRODUCT_ERROR';
    payload: any;
}

export type ProductAction = GetListProducts | ErrorActionProduct;

export const getListProducts =
    (value: Array<ProductModel>) =>
    async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({
                type: 'ON_GET_LIST_PRODUCTS',
                payload: value
            });
        } catch (error) {
            dispatch({
                type: 'ON_PRODUCT_ERROR',
                payload: error
            });
        }
    };
