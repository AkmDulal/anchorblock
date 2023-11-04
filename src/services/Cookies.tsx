export const COOKIE_NAME = 'vpntoken'

// COOKIEE REMOVE
export const cookiRemove = (cookieName: string) => {
  // document.cookie = cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = cookieName + '=; Max-Age=0'
}

// COOKIEE CREACT
export const createCookieInHour = (cookieName: string, cookieValue: string) => {
  let date = new Date();
  date.setTime(date.getTime()+(24*60*60*1000));
  document.cookie = cookieName + " = " + cookieValue + "; expires = " + date.toUTCString();
}

// COOKIEE GET
export const getCookie = (cookieName: string) => {
  let nameEQ = cookieName + "=";
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)===' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return '0';
}

// COOKI RESET
export const getORsetCookie = (cookieName: string, cookieValue: string) => {
let isCookie = getCookie(cookieName); 
if( isCookie === '0') {
  createCookieInHour(cookieName, cookieValue)
  isCookie = cookieValue
} 
return isCookie;
}
