import apisauce from 'apisauce';
import { AppEnvironment } from '../../config';
import UserData from './UserData';

//Create apisauce Instance
const getApiInstance = (baseURL) => {
    return apisauce.create({
        baseURL,
        timeout: 30000,
        headers: { 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' }
    });
};

const apiClient = (baseURL) => getApiInstance(baseURL);

const UnauthorizedAPI = apiClient(AppEnvironment.BASE_URL);

export default {
    userData: UserData(UnauthorizedAPI),
};