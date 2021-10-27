import { Dispatch } from 'react';
import { UserModel } from '../../utils/types';

export interface GetUserProfile {
    readonly type: 'ON_GET_USER_PROFILE';
    payload: UserModel;
}

export interface ErrorActionUser {
    readonly type: 'ON_USER_ERROR';
    payload: any;
}

export type UserAction = GetUserProfile | ErrorActionUser;

export const getUserProfile = (value: UserModel) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: 'ON_GET_USER_PROFILE',
                payload: value
            });
        } catch (error) {
            dispatch({
                type: 'ON_USER_ERROR',
                payload: error
            });
        }
    };
};
