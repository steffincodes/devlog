import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import CoverImage from "../../components/cover-image";
import Meta from "../../components/meta";
const Post = ({ htmlString, data }) => {
  return (
    <div className="container">
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📜</text></svg>"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/a11y-dark.min.css"
        />
      </Head>
      <Meta title={data.title} desc={data.excerpt} favicon={data.favicon} />
      <ul className="nav">
        <li>
          <a alt="home" href="/">
            🏠
          </a>
        </li>
        <li>
          <a alt="blog list" href="/blog">
            📚
          </a>
        </li>
      </ul>
      <CoverImage title={data.title} />
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;1,300;1,400&display=swap");
        :root {
          --bg-color: #eaeaea;
          --font-color: black;
          --accent-color: #7a490b;
        }
        * {
          box-sizing: border-box;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Raleway, Roboto, Helvetica Neue, sans-serif;
        }
        body {
          margin: 1em auto;
          width: 80vw;
        }
        pre {
          font-family: consolas;
        }
        pre > code {
          padding: 1em !important;
          border-radius: 1em !important;
        }
        p > code {
          background: #eee !important;
          padding: 0.2em;
          border-radius: 5px;
          font-family: consolas, monospace;
        }
        code::-webkit-scrollbar {
          display: none !important;
        }
        .nav {
          display: flex;
          justify-content: flex-start;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .nav li {
          padding-right: 1em;
        }
        a {
          text-decoration: none;
        }
        ul:has(> li > input) {
          list-style-type: none;
        }
        .msg {
          margin: 0 auto;
          padding: 1em;
          vertical-align: middle;
          border-radius: 5px;
        }
        .error {
          color: #d8000c;
          background-color: #ffd2d2;
        }
        .error::before {
          content: "🚨 ";
        }
        .info {
          color: #00529b;
          background-color: #bde5f8;
        }
        .info::before {
          content: "🚨 ";
        }
        .success {
          color: #4f8a10;
          background-color: #dff2bf;
        }
        .success::before {
          content: "🚨 ";
        }
        .warning {
          color: #9f6000;
          background-color: #feefb3;
        }
        .warning::before {
          content: "🚨 ";
        }
      `}</style>
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
