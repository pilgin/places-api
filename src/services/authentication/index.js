import authentication from 'feathers-authentication';

export default function authService() {
    const app = this;

    let defaultConfig = app.get('auth');
    let config = Object.assign({}, defaultConfig, {
        userEndpoint: '/user'
    });

    app.configure(authentication(config));
};
