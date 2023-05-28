import Cookie from 'js-Cookie'

const GetCookie = (cookieName) =>{
    return Cookie.get(cookieName);
}
export default GetCookie;