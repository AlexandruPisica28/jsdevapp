import axios from "axios";
import type { User } from "../types/User";

import { API_USERS } from "../config";

// export const getUsers = () => axios.get<User[]>(`${API_URL}/users`);
export const getUsers = () => axios.get<{ data: User[] }>(`${API_USERS}`);
export const getUserById = (id: number) =>
  axios.get<{ data: User[] }>(`${API_USERS}/${id}`);
// export const createUser = (user: Omit<User, "id">) =>
//   axios.post(`${API_URL}/users`, user);

export const createUser = (user: FormData) => axios.post(`${API_USERS}`, user);
export const updateUser = (id: number, user: FormData) =>
  axios.put(`${API_USERS}/${id}`, user);

export const deleteUser = async (id: number | string) => {
  return axios.delete(`${API_USERS}/${id}`);
};