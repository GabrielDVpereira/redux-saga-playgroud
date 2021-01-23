import { takeEvery, put } from "redux-saga/effects";

export const handleIncrement = function* handleIncrement(params) {
  yield takeEvery("INCREMENT", function* (action) {
    console.log("saga", action);
    yield put({ type: "DECREMENT" });
  });
};
