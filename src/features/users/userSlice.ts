// Libraries
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// My Creations
import type { User } from "../../types/user";

interface UserState {
  list: User[];
  loading: boolean;
  error: string | null;
  selectedUser: User | null;
}

const initialState: UserState = {
  list: [],
  loading: false,
  error: null,
  selectedUser: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.list = action.payload;
      state.loading = false;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedUser(state, action: PayloadAction<User | null>) {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  setSelectedUser,
} = userSlice.actions;

export default userSlice.reducer;
