import Axios from '@/utils/request';
export interface userLoginType {
  userName: string;
  password: string;
  isRM: boolean;
}
export interface setUserType {
  userName: string;
  password: string;
  email: string;
}
interface user_menu {
  userName: string;
}
export function handleUserLogin(data: userLoginType) {
  return Axios({
    url: '/login',
    method: 'POST',
    data: data,
    loading: true,
  });
}
export function setUser(data: setUserType) {
  return Axios({
    url: '/set_user',
    method: 'POST',
    data: data,
    loading: true,
  });
}

export function getMenu(data: user_menu) {
  return Axios({
    url: '/get_menu',
    method: 'POST',
    data: data,
    loading: true,
  });
}
