import * as ActionType from '../types/authTypes';

const initialState = {
    user: null,
    isAuth: false,
    loading: false
 };

 export const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOADING_START:
            return {
                ...state,
                loading: true
            };
            case ActionType.LOADING_END:
                return {
                    ...state,
                    loading: false
                };
        case ActionType.LOGIN_USER:
            return {
                ...state,
                isAuth: true
            };
            case ActionType.LOGOUT_USER:
                return {
                    ...state,
                    isAuth: false
                };
                case ActionType.GET_USER:
                    return {
                        ...state,
                        isAuth: true,
                        user: action.payload
                    };
    
        default:
            return state;
    }
 }