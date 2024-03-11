import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { loginActions } from "store/slices/loginSlice";
import { signupActions } from "store/slices/signupSlice";
import { registrationActions } from "store/slices/registrationSlice";
import { userActions } from "store/slices/userSlice";
import { editprofileActions } from "store/slices/editprofileSlice";
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...registrationActions,
      ...signupActions,
      ...loginActions,
      ...userActions,
      ...editprofileActions,
    },
    dispatch
  );
};
