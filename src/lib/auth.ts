import { USERS, User } from "./users";

export const login = async (id: string, password: string): Promise<User | null> => {
  const user = USERS.find(u => u.id === id && u.password === password);
  return user || null;
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem("user");
};