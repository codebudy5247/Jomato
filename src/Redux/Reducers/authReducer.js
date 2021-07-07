import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
   
  } from '../Actions/types'
  
  const user = JSON.parse(localStorage.getItem("userInfo"));
  
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
  
  
  export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true ,isLoggedIn: false,}
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload, isLoggedIn: true, }
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload , isLoggedIn: false,}
      case USER_LOGOUT:
        return {    isLoggedIn: false}
      default:
        return state
    }
  }
  
  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true ,isLoggedIn: false}
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload , isLoggedIn: true,}
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload  , isLoggedIn: false,}
      case USER_LOGOUT:
        return {  isLoggedIn: false,}
      default:
        return state
    }
  }