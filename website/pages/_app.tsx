import Layout from "../component/layout/Layout";
import react, { useEffect, useState } from "react";

import "../styles/theme.css";
import "../styles/TailwindUtlis.css";
import "../styles/globals.css";
import "../styles/TailwindUtlis.css";
import "../component/styles/ComponentStyle.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: any) {
  const location = useRouter();

  return (
    <div
      id="mv_theme"
      className={`mw-body  light ${
        location.asPath.includes("/ourteam/team") ? "" : ""
      }`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
