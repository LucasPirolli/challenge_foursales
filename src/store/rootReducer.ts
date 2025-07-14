// Libraries
import { combineReducers } from "redux";

// My Creations
import usersReducer from "../features/users/userSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
