import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

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
      </Head>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;1,300;1,400&display=swap');
        :root {
          --bg-color: #eaeaea;
          --font-color: black;
          --accent-color: #7a490b;
        }
        html,
        body {
          padding: 0;
          margin: 1em auto;
          width: 80vw;
          font-family: Raleway, Roboto, Helvetica Neue, sans-serif;
        }
        pre{
          background: #eee;
          font-family: consolas;
          padding: 1em;
          border-radius: 1em;
        }

        * {
          box-sizing: border-box;
        }

      `}</style>
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  console.log("files: ", files);
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));
  console.log("paths: ", paths);

  return {
    paths,
    fallback: false
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
      data: parsedMarkdown.data
    }
  };
};

export default Post;