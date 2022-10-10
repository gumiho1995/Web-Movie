import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { rootReducer } from "./reducers/rootReducer";
import logger from 'redux-logger';
import { persistStore } from 'redux-pouchdb';

const middleware = [
    thunk,
    // logger,
  ].filter(Boolean);

export const store = createStore(rootReducer,applyMiddleware(...middleware));
persistStore(store);
