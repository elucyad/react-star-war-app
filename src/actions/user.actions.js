import { userService } from '../services';
import { userConstants } from '../constants';
import { history } from './../helpers/history';
import { alertActions } from '../actions';

const login = (username, password) => dispatch => {

  dispatch(request({ username }));

  userService.login(username, password)
    .then(
      user => {
        if (user && user.results.length > 0) {
          let fetchedUser={
            username:user.results[0].name,
            gender:user.results[0].gender,
          };        

          dispatch(success(fetchedUser)); 

          history.push('/');
      } else {
        alert('invalid username or password');
      }
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
};

const autoAuthenticate=user=> {
  return { type: userConstants.LOGIN_SUCCESS, user };
};

const request = user => {
  return { type: userConstants.LOGIN_REQUEST, user };
};

const success = user => {
  return { type: userConstants.LOGIN_SUCCESS, user };
};

const failure = error => {
  return { type: userConstants.LOGIN_FAILURE, error };
};

const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
};

export const userActions = {
  login,
  logout,
  autoAuthenticate,
};
