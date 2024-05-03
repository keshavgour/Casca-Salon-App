import { useMutation } from "@tanstack/react-query";
import { registerService } from "Services/registerService";
import { useNavigate } from "react-router-dom";

export const useRegisterService = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerService,
    onSuccess: (data) => {
      console.log(data);
      navigate("/signup");
    },
  });
};
