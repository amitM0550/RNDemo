export const ENVIRONMENT = 'stage';

const CONFIG = {
    stage: {
        BASE_URL: 'https://randomuser.me/',
    },
    prod: {
        BASE_URL: 'https://randomuser.me/',
    }
};

export default CONFIG[ENVIRONMENT];