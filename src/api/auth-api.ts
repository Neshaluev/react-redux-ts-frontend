import axios from '../api/axios';
import { TypeDataLogin, TypeDataRegister } from '../redux/user/type/state';

type ResponseApi = {
  status: string;
  data: any;
};

export const AuthApi = {
  loginUser: async (userData: TypeDataLogin): Promise<ResponseApi> => {
    const data = await axios.post<ResponseApi>('/api/auth/login', userData);
    return data.data;
  },
  registerUser: async (userData: TypeDataRegister): Promise<ResponseApi> => {
    const { data } = await axios.post<ResponseApi>(
      '/api/auth/register',
      userData,
    );
    return data;
  },
};
