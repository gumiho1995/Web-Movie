
const START_GET_DETAIL = "START_GET_DETAIL";
const STOP_GET_DETAIL = "STOP_GET_DETAIL";
const START_GET_CREDIT = "START_GET_CREDIT";
const STOP_GET_CREDIT = "STOP_GET_CREDIT";
const START_GET_RECOMEND = "START_GET_RECOMEND";
const STOP_GET_RECOMEND = "STOP_GET_RECOMEND";

export const MovieDetailAction = {
  START_GET_DETAIL,
  STOP_GET_DETAIL,
  START_GET_CREDIT,
  STOP_GET_CREDIT,
  START_GET_RECOMEND,
  STOP_GET_RECOMEND,
};
export const startDetailMovie = () => {
  return {
    type: START_GET_DETAIL,
  };
};
export const stopDetailMovie = (
  isSuccess,
  lstDetailMovie = {},
  errorDiscription,
  isEmty
) => {
  return {
    type: STOP_GET_DETAIL,
    isSuccess,
    lstDetailMovie,
    errorDiscription,
    isEmty,
  };
};
export const startCreditMovie = () => {
  return {
    type: START_GET_CREDIT,
  };
};
export const stopCreditMovie = (
  isSuccess,
  lstCreditMovie = {},
  errorDiscription,
  isEmty
) => {
  return {
    type: STOP_GET_CREDIT,
    isSuccess,
    lstCreditMovie,
    errorDiscription,
    isEmty,
  };
};
export const startRecommendMovie = () => {
  return {
    type: START_GET_RECOMEND,
  };
};
export const stopRecommendMovie = (
  isSuccess,
  lstRecomendMovie = {},
  errorDiscription,
  isEmty
) => {
  return {
    type: STOP_GET_RECOMEND,
    isSuccess,
    lstRecomendMovie,
    errorDiscription,
    isEmty,
  };
};

export const GetDetail = function (id) {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      dispatch(startDetailMovie());
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=82dee22856e0d0ac5f767ec6fb845efc&language=en-US`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            resolve(res);
            dispatch(stopDetailMovie(true, res, "", false));
          } else {
            resolve(res);
            dispatch(stopDetailMovie(false, res, "Not Data Movie", true));
          }
        })
        .catch((err) => {
          dispatch(stopDetailMovie(false, [], "Error:" + err));
        });
    });
  };
};
export const GetCredits = function (id) {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      dispatch(startCreditMovie());
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=82dee22856e0d0ac5f767ec6fb845efc`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            resolve(res);
            dispatch(stopCreditMovie(true, res, "", false));
          } else {
            resolve(res);
            dispatch(stopCreditMovie(false, res, "Not Data Movie", true));
          }
        })
        .catch((err) => {
          dispatch(stopCreditMovie(false, [], "Error:" + err));
        });
    });
  };
};
export const GetRecomend = function (id) {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      dispatch(startRecommendMovie());
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=82dee22856e0d0ac5f767ec6fb845efc&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            resolve(res);
            dispatch(stopRecommendMovie(true, res, "", false));
          } else {
            resolve(res);
            dispatch(stopRecommendMovie(false, res, "Not Data Movie", true));
          }
        })
        .catch((err) => {
          dispatch(stopRecommendMovie(false, [], "Error:" + err));
        });
    });
  };
};
