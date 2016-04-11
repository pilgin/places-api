import globalHooks from '../../../hooks';
import hooks from 'feathers-hooks';
import authentication from 'feathers-authentication';

const auth = authentication.hooks;

export let before = {
    all: [],
    find: [
      auth.verifyToken(),
      auth.populateUser(),
      auth.requireAuth()
    ],
    get: [
      auth.verifyToken(),
      auth.populateUser(),
      auth.requireAuth()
    ],
    create: [
      auth.hashPassword()
    ],
    update: [
      auth.verifyToken(),
      auth.populateUser(),
      auth.requireAuth()
    ],
    patch: [
      auth.verifyToken(),
      auth.populateUser(),
      auth.requireAuth()
    ],
    remove: [
      auth.verifyToken(),
      auth.populateUser(),
      auth.requireAuth()
    ]
};

export let after = {
    all: [hooks.remove('password')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};
