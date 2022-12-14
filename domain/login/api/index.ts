import instance from "../../../lib/instance";
import { getMyQuestionData } from "../../my/api";
import { LoginRequestType } from "../interface";

export const postLogin = async (loginData: LoginRequestType) => {
  try {
    const { data } = await instance.post(`/auth/login`, loginData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleLogin = (data: LoginRequestType) => {
  postLogin(data)
    .then((response) => {
      localStorage.setItem("accessToken", response?.accessToken);
      location.href = "/";
    })
    .catch((_) => {
      alert("잘못된 이메일입니다.");
    });
};
