import { put, takeEvery, call, all, fork } from "redux-saga/effects";
import * as actions from "./actionConstants";
export function* helloSaga() {
  console.log("Hello Sagas!");
}

async function getDataFromApi(action) {
  console.log(action);
  return fetch(`https://api.github.com/users/${action.userID}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
}
export function* fetchProfileByID(action) {
  const res = yield call(getDataFromApi, action);
  console.log(res);
  yield put({ type: actions.ADD_PROFILE, data: res });
}
export function* watchFetchProfileById() {
  yield takeEvery("ADD_PROFILE_ASYNC", fetchProfileByID);
}

export function* deleteProfileByIDSuccess(action) {
  yield put({ type: actions.REMOVE_PROFILE, userID: action.userID });
}

export function* deleteProfileByIDSaga() {
  yield takeEvery("DELETE_PROFILE_BY_ID", deleteProfileByIDSuccess);
}

export default function* rootSaga() {
  yield all([
    fork(helloSaga),
    fork(watchFetchProfileById),
    fork(deleteProfileByIDSaga),
  ]);
}
