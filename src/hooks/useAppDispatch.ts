// Libraries
import { useDispatch } from "react-redux";

// My Creations
import type { AppDispatch } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
