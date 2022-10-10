import { combineReducers } from "redux";
import { homeReducer } from "../container/home/reducer";
import { movieReducer } from "../container/movie/reducer";

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  console.log("ROOT REDUCER: ", state);
  if (state) {
    state.homeReducer = undefined;
    state.movieReducer = undefined;
  }

  return appReducer(state, action);
};

const appReducer = combineReducers({
  homeReducer,
  movieReducer,
});

export { rootReducer };
