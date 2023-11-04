import { cookiRemove, getCookie, COOKIE_NAME } from './Cookies';

const logout = () => {
    let cRemove = cookiRemove(COOKIE_NAME);
    localStorage.removeItem("Username")
    localStorage.removeItem("uData")
    return cRemove;
};

const getCurrentUser = () => {
   let usertoken = getCookie(COOKIE_NAME);
    return usertoken;
};
const privateoRouter = () => {
   let usertoken = getCookie(COOKIE_NAME);
   if(Number(usertoken) === 0){
       return  false
   }   else {
       return  true
   }
};
const AuthService = {
    logout,
    getCurrentUser,
    privateoRouter
};

export default AuthService;