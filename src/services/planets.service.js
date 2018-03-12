import SETTINGS from '../util/settings';
import handleResponse from './common';

const search = (name) => {

  const requestOptions = {
    method: 'GET',    
  };

  return fetch(SETTINGS.searchPlanet + name, requestOptions)
    .then(handleResponse);
};

export const planetsService={
  search,
};
