import { loginActions } from "./../store/slices/loginSlice";
import { signupActions } from "./../store/slices/signupSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { registrationActions } from "store/slices/registrationSlice";
import { userActions } from "store/slices/userSlice";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...registrationActions,
      ...signupActions,
      ...loginActions,
      ...userActions,
    },
    dispatch
  );
};
