import React from "react";
import type { NextPage } from "next";
import {
  CertificateButton,
  SignupForm,
  SignupButton,
  SignupInput,
  SignupLabel,
  RedStar,
  SignupMainText,
  SignupTopBar,
  SignupFormElement,
  SignupButtonWrapper,
} from "./index.style";
import { NextRouter, useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SignupRequestType } from "../interface";
import { handleSignup, handleCertificate } from "../api";
import Link from "next/link";

const Signup: NextPage = () => {
  const [status, setStatus] = React.useState("인증");

  const router: NextRouter = useRouter();
  const { register, handleSubmit } = useForm<SignupRequestType>();
  const [email, setEmail] = React.useState("");

  return (
    <SignupForm
      onSubmit={handleSubmit((data) => {
        handleSignup(email, data);
      })}
    >
      <Link href="/">
        <SignupMainText>회원가입</SignupMainText>
      </Link>
      <SignupTopBar />

      <SignupFormElement>
        <SignupLabel htmlFor="username">
          Email
          <RedStar>*</RedStar>
        </SignupLabel>

        <SignupInput
          type="email"
          placeholder="@bssm.hs.kr"
          id="username"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <CertificateButton
          type="button"
          onClick={() => {
            setStatus("전송중..");
            handleCertificate(email, setStatus);
          }}
        >
          {status}
        </CertificateButton>
      </SignupFormElement>

      {status === "전송 완료!" ? (
        <SignupFormElement>
          <SignupLabel htmlFor="certificate">
            인증코드
            <RedStar>*</RedStar>
          </SignupLabel>
          <SignupInput
            type="text"
            placeholder="인증코드"
            id="checkCode"
            autoComplete="on"
            {...register("checkCode")}
          />
        </SignupFormElement>
      ) : (
        <></>
      )}

      <SignupFormElement>
        <SignupLabel htmlFor="password">
          Password
          <RedStar>*</RedStar>
        </SignupLabel>
        <SignupInput
          type="password"
          placeholder="Password"
          id="password"
          autoComplete="on"
          {...register("password")}
        />
      </SignupFormElement>
      <SignupFormElement>
        <SignupLabel htmlFor="nickname">
          닉네임
          <RedStar>*</RedStar>
        </SignupLabel>
        <SignupInput
          type="text"
          placeholder="닉네임"
          id="nickname"
          autoComplete="on"
          {...register("nickname")}
        />
      </SignupFormElement>
      <SignupButtonWrapper>
        <SignupButton>회원가입</SignupButton>
      </SignupButtonWrapper>
    </SignupForm>
  );
};

export default Signup;
