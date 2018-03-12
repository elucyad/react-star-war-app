import SETTINGS from '../util/settings';
import handleResponse from './common';

const login = (username, password) => {

  const requestOptions = {
    method: 'GET',    
  };

  return fetch(SETTINGS.searchPeople + username, requestOptions)
    .then(handleResponse)
    .then(user => {      
      if (user && user.results.length > 0 && user.results[0].birth_year===password) {        
        let fetchedUser={
          username:user.results[0].name,
          gender:user.results[0].gender,
        }; 
        localStorage.setItem('star_war_token',JSON.stringify(fetchedUser));
      }
      return user;
    });
};

const logout = () => {  
  localStorage.removeItem('star_war_token');
};

const getProfile = () => {  
  const token = localStorage.getItem('star_war_token');
  return token;
};

export const userService = {
  login,
  logout,
  getProfile,
};

