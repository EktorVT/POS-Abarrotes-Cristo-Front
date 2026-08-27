import api from "@/services/api/axios";

export interface LoginRequest {
  username: string;
  password: string;
}

export const login = async (data: LoginRequest) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};
