import hooks from 'feathers-hooks';
import authentication from 'feathers-authentication';

const auth = authentication.hooks;

export let before = {
    all: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated()
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};

export let after = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};
