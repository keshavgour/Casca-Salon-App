import { useMutation } from "@tanstack/react-query";
import { signupService } from "Services/signupService";
import { useNavigate } from "react-router-dom";

export const useSignupService = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signupService,
    onSuccess: (data) => {
      console.log(data);
      navigate("/login");
    },
  });
};
