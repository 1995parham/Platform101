import "reveal.js/dist/reveal.css";
import "../styles/material.css";
import "reveal.js/plugin/highlight/monokai.css";

import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Platform101</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐼</text></svg>"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
