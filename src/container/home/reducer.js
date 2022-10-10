import * as _state from "./state";
import * as _action from "./action";
const homeReducer = function (state = _state.SimState, action) {
  switch (action.type) {
    case _action.MovieAction.START_SEARCH_MOVIE:
      return {
        ...state,
        lstMovie: {
          ...state.lstMovie,
          isFetching: true,
        },
      };

    case _action.MovieAction.STOP_SEARCH_MOVIE:
      return {
        ...state,
        lstMovie: {
          ...state.lstMovie,
          isFetching: false,
          isSuccess: action.isSuccess,
          errorDiscription: action.errorDiscription,
          isEmty: action.isEmty,
          dataMovie: action.lstMovie,
        },
      };

    default:
      return state;
      
  }
};
export { homeReducer };
