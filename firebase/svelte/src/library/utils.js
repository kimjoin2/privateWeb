module.exports = {
  getCookie: getCookie,
  setCookie: setCookie,
  removeCookie: removeCookie,
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2)
    return parts.pop().split(";").shift();
}

function setCookie(cookie_name, value, days=1) {
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + days);
  const cookie_value = escape(value) + ((days == null) ? '' : ';    expires=' + expireDate.toUTCString());
  document.cookie = cookie_name + '=' + cookie_value;
}

function removeCookie(name){
  setCookie(name, "", -1);
}
