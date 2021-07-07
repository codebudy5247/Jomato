import { combineReducers } from "redux";

import { userLoginReducer, userRegisterReducer } from "./authReducer";

import {
  themeReducer
} from "./themeReducer"

import {
  alertReducer
} from "./alertReducer"


export const reducers = combineReducers({
  alert:alertReducer,
  theme:themeReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
