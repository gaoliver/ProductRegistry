import { UserModel } from '../../utils/types';
import { UserAction } from '../actions/userActions';

type UserStateModel = {
  user: UserModel;
};

const initialState: UserStateModel = {
  user: {
    id: undefined,
    name: '',
    email: '',
    password: '',
    avatar: undefined
  }
};

export const UserReducer = (
  state: UserStateModel = initialState,
  action: UserAction
) => {
  switch (action.type) {
    case 'ON_GET_USER_PROFILE':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
