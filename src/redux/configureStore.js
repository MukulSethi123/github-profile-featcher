import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  // sagaMiddleware.run()
  return {
    ...createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run,
  };

  // const action = (type) => store.dispatch({ type });
}

export default configureStore;
