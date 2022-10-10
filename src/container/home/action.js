const START_SEARCH_MOVIE = "START_SEARCH_MOVIE";
const STOP_SEARCH_MOVIE = "STOP_SEARCH_MOVIE";
const html = document.querySelector("html");

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let random = randomNumber(0, 20);
export const MovieAction = {
  START_SEARCH_MOVIE,
  STOP_SEARCH_MOVIE,
};

export const startSearchMovie = () => {
  return {
    type: START_SEARCH_MOVIE,
  };
};
export const stopSearchMovie = (
  isSuccess,
  lstMovie = {},
  errorDiscription,
  isEmty
) => {
  return {
    type: STOP_SEARCH_MOVIE,
    isSuccess,
    lstMovie,
    errorDiscription,
    isEmty,
  };
};

export const searchMovie = function (tab,keyword, page) {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      dispatch(startSearchMovie());
      if(tab=== 0)
      {
        if(keyword.trim().length > 0)
        {
          fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=82dee22856e0d0ac5f767ec6fb845efc&language=en-US&query=${keyword}&page=${page}&include_adult=false`
          ).then(res =>res.json())
            .then((res) => {
              if (res ) {
                resolve(res);
                dispatch(stopSearchMovie(true, res, "", false));
              } else {
                resolve(res);
                dispatch(
                  stopSearchMovie(false, res, "Not Data Movie", true)
                );
              }
            })
            .catch((err) => {
              dispatch(stopSearchMovie(false, [], "Error:" + err));
            });
        }else{
          fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=82dee22856e0d0ac5f767ec6fb845efc&language=en-US&page=${page}`
          ).then(res =>res.json())
            .then((res) => {
              if (res ) {
                resolve(res);
                dispatch(stopSearchMovie(true, res, "", false));
              } else {
                resolve(res);
                dispatch(
                  stopSearchMovie(false, res, "Not Data Movie", true)
                );
              }
            })
            .catch((err) => {
              dispatch(stopSearchMovie(false, [], "Error:" + err));
            });
        }
      }else
      {
        if(keyword.trim().length > 0)
      {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=82dee22856e0d0ac5f767ec6fb845efc&language=en-US&query=${keyword}&page=${page}&include_adult=false`
        ).then(res =>res.json())
          .then((res) => {
            if (res ) {
              resolve(res);
              dispatch(stopSearchMovie(true, res, "", false));
            } else {
              resolve(res);
              dispatch(
                stopSearchMovie(false, res, "Not Data Movie", true)
              );
            }
          })
          .catch((err) => {
            dispatch(stopSearchMovie(false, [], "Error:" + err));
          });
      }else{
        fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=82dee22856e0d0ac5f767ec6fb845efc&language=en-US&page=${page}`
        ).then(res =>res.json())
          .then((res) => {
            if (res ) {
              resolve(res);
              dispatch(stopSearchMovie(true, res, "", false));
            } else {
              resolve(res);
              dispatch(
                stopSearchMovie(false, res, "Not Data Movie", true)
              );
            }
          })
          .catch((err) => {
            dispatch(stopSearchMovie(false, [], "Error:" + err));
          });
      }
      }
      
      
    });
  };
};
