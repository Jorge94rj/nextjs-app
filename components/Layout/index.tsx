import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";
import { PageContainer } from "./index.style";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Title set in title tag</title>
        <meta property="og:title" content="Title changed from meta tag" key="title" />
      </Head>
      <Navbar />
      <PageContainer>
        {children}
      </PageContainer>
    </>
  )
}
