const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("userName");
  localStorage.removeItem("resetToken");
};
export default logout;
