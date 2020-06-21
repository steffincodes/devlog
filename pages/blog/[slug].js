import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "../../components/Markdown";
import CoverImage from "../../components/CoverImage";
import Meta from "../../components/Meta";
import Footer from "../../components/Footer";
const Post = ({ htmlString, data, fileCreatedDate, fileLastmodifiedDate }) => {
  return (
    <div className="container">
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
      {/* <div dangerouslySetInnerHTML={{ __html: htmlString }} /> */}
      <Markdown postBody={htmlString} />
      <Footer
        fileCreatedDate={fileCreatedDate}
        fileLastmodifiedDate={fileLastmodifiedDate}
      />

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
          // font-family: consolas;
          // padding: 1em !important;
          // background: #eee !important;
          // border-radius: 10px !important;
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
          content: "😬 ";
        }
        .success {
          color: #4f8a10;
          background-color: #dff2bf;
        }
        .success::before {
          content: "🥳 ";
        }
        .warning {
          color: #9f6000;
          background-color: #feefb3;
        }
        .warning::before {
          content: "🤫 ";
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
  const filePath = path.join("posts", slug + ".md");
  const markdownWithMetadata = fs.readFileSync(filePath).toString();
  const fileCreatedDate = fs.statSync(filePath).birthtime;
  const fileLastmodifiedDate = fs.statSync(filePath).mtime;
  const parsedMarkdown = matter(markdownWithMetadata);
  return {
    props: {
      htmlString: parsedMarkdown.content,
      data: parsedMarkdown.data,
      fileCreatedDate: fileCreatedDate.toString(),
      fileLastmodifiedDate: fileLastmodifiedDate.toString(),
    },
  };
};

export default Post;
