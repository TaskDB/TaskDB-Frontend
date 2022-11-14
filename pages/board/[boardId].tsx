import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { dynamicRouteType } from "../../domain/board/interface";
import IndividualBoard from "../../domain/board/components/[boardId]"

const BoardId: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분
  const boardId: dynamicRouteType = route.boardId;
  return (
    <>
      <Head>
        <title>BoardId</title>
      </Head>
      <section id={`indiviual-board`}>
        <IndividualBoard boardId={boardId} />
      </section>
    </>
  );
};
export default BoardId;