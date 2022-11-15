import React from "react";
import type { NextPage } from "next";
import { InfoProvider, InfoTitle, InfoUserContent } from "./info.style";
import { UserInfoRightPropsType } from "../interface";

const Info: NextPage<UserInfoRightPropsType> = ({ moveRef, uRef }) => {
  return (
    <InfoProvider ref={moveRef}>
      <div ref={uRef}>
        <InfoTitle>정보</InfoTitle>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
      </div>
    </InfoProvider>
  );
};
export default Info;
