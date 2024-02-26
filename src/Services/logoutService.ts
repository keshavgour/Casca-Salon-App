const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("userName");
};
export default logout;
