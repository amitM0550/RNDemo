import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    userRequest: ['payload'],
    userSuccess: ['data'],
    userFailure: ['error'],
});

export const UserTypes = Types;
const UserActions = Creators;
export default UserActions;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    isLoading: false,
    user: { results: [], info: [] },
    error: null
});

/* ------------- Selectors ------------ */
export const UserSelectors = {
    user: (state) => state.user.user.results,
    info: (state) => state.user.user.info,
};

/* ------------- Reducers ------------- */
export const onUserRequest = (state) => {
    return state.merge({
        isLoading: true,
        error: null,
    });
};

export const onUserSuccess = (state, { data }) => {
    const newUserInfo = {
        results: [...state?.user?.results, ...data?.results],
        info: { ...state?.user?.info, ...data?.info }
    }
    return state.merge({
        isLoading: false,
        user: newUserInfo,
        error: null,
    });
};

export const onUserFailure = (state, { error }) => {
    return state.merge({
        isLoading: false,
        user: {},
        error: error,
    });
};

/* ------------- Hookup Reducers To Types ------------- */
export const userReducer = createReducer(INITIAL_STATE, {
    [Types.USER_REQUEST]: onUserRequest,
    [Types.USER_SUCCESS]: onUserSuccess,
    [Types.USER_FAILURE]: onUserFailure,
});