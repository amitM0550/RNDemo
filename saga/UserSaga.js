import { call, put, takeEvery } from 'redux-saga/effects';
import UserActions, { UserTypes } from '../redux/UserRedux';
import API from '../services/API';
import { checkSuccessRequestCode } from '../services/Utils';

const getUserAPI = API.userData();

export function* onGetUserDataRequest(api, { payload }) {
    const page = payload?.page ?? 1;
    const results = payload?.results ?? 10;
    const seed = payload?.seed ?? '';

    const payloadStr = `?page=${page}&results=${results}&seed=${seed}`;

    const response = yield call(api.getUserData, payloadStr);

    if (checkSuccessRequestCode(response?.status)) {
        yield put(
            UserActions.userSuccess(response?.data ?? {})
        );
    } else {
        yield put(
            UserActions.userFailure(payload)
        );
    }
}

export default [
    takeEvery(
        UserTypes.USER_REQUEST,
        onGetUserDataRequest,
        getUserAPI
    ),
];