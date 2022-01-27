import React from "react";
import Head from "next/head";
import { Footer } from "./footer";
import layoutData from "../content/global/index.json";

export const Layout = ({
  data = layoutData,
  themeData = {
    colors: {
      primary: "",
      accent1: "",
      accent2: "",
      accent3: "",
      accent4: "",
      white: "",
      grayLight: "",
      gray: "",
      grayDark: "",
      black: "",
    },
    meta: {
      siteTitle: "Filecoin Hackathon",
      siteDescription: "Filecoin Hackathon Event",
      siteImageSrc: ""
    }
  },
  children,
}) => {
  return (
    <>
      <Head>
        <title>{themeData?.meta?.siteTitle}</title>
        <meta name="author" content="Protocol Labs"></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content={data?.siteUrl} />
        <meta property="og:title" content={themeData?.meta?.siteTitle} />
        <meta property="og:description" content={themeData?.meta?.siteDescription} />
        <meta property="og:image" content={themeData?.meta?.siteImageSrc} />        
        <style
          id="customProperties"
          dangerouslySetInnerHTML={{
            __html: `
            html {
              scroll-behavior: smooth;
            }
            :root {
              --primary-color: ${themeData?.colors?.primary};
              --accent1-color: ${themeData?.colors?.accent1};
              --accent2-color: ${themeData?.colors?.accent2};
              --accent3-color: ${themeData?.colors?.accent3};
              --accent4-color: ${themeData?.colors?.accent4};
              --white-color: ${themeData?.colors?.white};
              --black-color: ${themeData?.colors?.black};
              --gray-light-color: ${themeData?.colors?.grayLight};
              --gray-color: ${themeData?.colors?.gray};
              --gray-dark-color: ${themeData?.colors?.grayDark};
            }
            .markdown ul {
              list-style: disc inside;
              margin-left: 1.5rem;
            }
            .markdown ul li {
              margin-bottom: .5rem;
            }
            .markdown a {
              text-decoration: underline;
            }
          `,
          }}
        />
      </Head>
      <div className={`min-h-screen flex flex-col`}>
        <div className="flex flex-col flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      siteUrl
      gtmId
      redirects {
        from
        to
      }
    }
  }
`;
