import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { initialState } from "./redux/initialState";

import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";
import rootSaga, { watchFetchProfileById } from "./redux/sagas";

const store = configureStore(initialState);
store.runSaga(rootSaga);
const action = (type) => store.dispatch({ type });
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App action={action} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
