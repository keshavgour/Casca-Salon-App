const logout = () => {
  localStorage.removeItem("access_token");
};
export default logout;
