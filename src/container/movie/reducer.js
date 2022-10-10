import * as _state from "./state";
import * as _action from "./action";

const movieReducer = function (state = _state.SimState, action) {
  switch (action.type) {
    case _action.MovieDetailAction.START_GET_DETAIL:
      return {
        ...state,
        lstMovieDetails: {
          ...state.lstMovie,
          isFetching: true,
        },
      };

    case _action.MovieDetailAction.STOP_GET_DETAIL:
      return {
        ...state,
        lstMovieDetails: {
          ...state.lstMovie,
          isFetching: false,
          isSuccess: action.isSuccess,
          errorDiscription: action.errorDiscription,
          isEmty: action.isEmty,
          details: action.lstDetailMovie,
        },
      };
    case _action.MovieDetailAction.START_GET_CREDIT:
      return {
        ...state,
        lstMovieDetails: {
          ...state.lstMovie,
          isFetching: true,
        },
      };

    case _action.MovieDetailAction.STOP_GET_CREDIT:
      return {
        ...state,
        lstMovieDetails: {
          ...state.lstMovie,
          isFetching: false,
          isSuccess: action.isSuccess,
          errorDiscription: action.errorDiscription,
          isEmty: action.isEmty,
          credits: action.lstCreditMovie,
        },
      };

    case _action.MovieDetailAction.START_GET_RECOMEND:
      return {
        ...state,
        lstMovieDetails: {
          ...state.lstMovie,
          isFetching: true,
        },
      };

    case _action.MovieDetailAction.STOP_GET_RECOMEND:
      return {
        ...state,
        lstMovieDetails: {
          ...state.lstMovie,
          isFetching: false,
          isSuccess: action.isSuccess,
          errorDiscription: action.errorDiscription,
          isEmty: action.isEmty,
          recommendations: action.lstRecomendMovie,
        },
      };

    default:
      return state;
  }
};
export { movieReducer };
