// Libraries
import { all } from "redux-saga/effects";

// My Creations
import userSaga from "../features/users/userSaga";

export default function* rootSaga() {
  yield all([userSaga()]);
}
