export interface User {
  id: string;
  name: string;
}

export const login = async (id: string, password: string): Promise<User | null> => {
  // This is a mock implementation. Replace with actual authentication logic.
  if (id === "demo" && password === "password") {
    return { id: "1", name: "Demo User" };
  }
  return null;
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem("user");
};