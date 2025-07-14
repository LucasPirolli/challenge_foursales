// Libraries
import axios from "axios";

// My Creations
import type { User } from "../types/user";

export const fetchUsersApi = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};
