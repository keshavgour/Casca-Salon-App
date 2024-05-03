import { useMutation } from "@tanstack/react-query";
import { loginService } from "Services/loginService";
import { useActions } from "hooks/useActions";
import { useNavigate } from "react-router-dom";

export const useLoginService = () => {
  const navigate = useNavigate();
  const { setUserName } = useActions();

  return useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      setUserName(data.name);
      navigate("/dashboard");
    },
  });
};
