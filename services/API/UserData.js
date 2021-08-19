import AuthApis from '../../constants/ApiConst';

const UserData = (UnauthorizedAPI) => () => {
    const getUserData = (payload) => {
        return UnauthorizedAPI.get(AuthApis.userDataUrl + payload);
    };
    return {
        getUserData,
    };
};

export default UserData;