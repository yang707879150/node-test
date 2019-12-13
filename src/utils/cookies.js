import Cookies from 'js-cookie'

const TokenKey = 'TokenKey'
const userInfor = "userInfor"

//登录类型入口
const login_type = "login_type"

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUserInfor(value) {
  return Cookies.set(userInfor, value)
}

export function getUserInfor(value) {
  return Cookies.get(value)
}

export function set_login_type(value) {
  return Cookies.set(login_type, value)
}

/*微信登录得token */
export function get_wapToken(value) {
  return Cookies.get(value)
}
export function set_wapToken(value) {
  return Cookies.set("wapToken",value)
}
/*微信登录得token */


export function get_login_type(value) {
  return Cookies.get(login_type)
}

export function clearAllCookie() {
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (var i = keys.length; i--;)
      document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
  }
}


