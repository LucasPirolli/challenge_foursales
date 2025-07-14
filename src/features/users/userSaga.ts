// Libraries
import { call, put, takeLatest } from "redux-saga/effects";

// My Creations
import type { User } from "../../types/user";
import { fetchUsersApi } from "../../api/users";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./userSlice";

function* fetchUsersWorker() {
  try {
    const users: User[] = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message || "Erro ao buscar usuários"));
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersWorker);
}
