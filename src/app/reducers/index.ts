import { combineReducers } from "@reduxjs/toolkit";
import { StoreState } from "../../types";
import authSlice from "../../features/auth/authSlice";
import employeeSlice from "../../features/employees/employeeSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  employees: employeeSlice,
});
export default rootReducer;
