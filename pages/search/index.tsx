import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import ResultPage from "../../domain/header/components/result";

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>검색 결과</title>
      </Head>
      <section id={`Search`}>
        <ResultPage />
      </section>
    </>
  );
};
export default Search;
