import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "../../../interface/user";
import { API } from "../../../libs/api";
import useToast from "../../../hooks/useToast";
import { useDispatch } from "react-redux";
import { AUTH_CHECK, AUTH_LOGIN } from "../../../store/rootReducer";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [form, setForm] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin() {
    try {
      const response = await API.post("/auth/login", form);
      console.log(response);
      dispatch(AUTH_LOGIN(response.data));
      dispatch(AUTH_CHECK(response?.data.user));
      //   localStorage.setItem("token", response.data.token);
      if (response) toast("Success", "Login successfully", "success");

      navigate("/");
    } catch (error) {
      if (error) toast("Failed", "Login Failed", "error");
      console.log(error);
    }
  }
  return { handleChange, handleLogin };
}
