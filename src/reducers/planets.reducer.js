import { planetConstants,userConstants } from '../constants';

export function planets(state={},action) {
  switch (action.type) {
    case planetConstants.PLANET_SEARCH_START:
      return {
        fetching:true,
        data:action.data,
      };
    case planetConstants.PLANET_SEARCH_COMPLETE:
      return {
        fetched:true,
        showDetails:false,
        data:action.data,
      };      
    case planetConstants.PLANET_SEARCH_CLEAR:
      return [];
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
