import { planetConstants } from '../constants';
import {planetsService} from '../services';
import { alertActions } from '../actions';

const search = name =>dispatch => {
  
  dispatch(request());

  planetsService.search(name)
    .then(
      planets=>{
        let data=planets.results.map(item=> item);
        dispatch(success(data)); 
      },
      error => {
        //dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );

};

const request = () => {
  return { type: planetConstants.PLANET_SEARCH_START, data:{} };
};

const success = data => {
  return { type: planetConstants.PLANET_SEARCH_COMPLETE, data };
};

const clear = () => ({
  type: planetConstants.PLANET_SEARCH_CLEAR,
});


export const planetsActions = {
  search,
  clear,    
};
