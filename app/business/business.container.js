import userManager from './user.manager';

function getter(manager, request) {
  return function (request) {
    return manager.create(request, this);
  };
}

export default {
  getUserManager: getter(userManager)
};
