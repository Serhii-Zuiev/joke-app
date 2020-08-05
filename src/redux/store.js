import { createStore, compose, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "../saga/sagas";
import { reducer } from "./reducer";

const saga = createSagaMiddleware();

export const store = createStore(
  reducer,
  compose(applyMiddleware(saga), devToolsEnhancer())
);

saga.run(sagaWatcher);
