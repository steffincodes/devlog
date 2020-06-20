import Link from "next/link";
import fs from "fs";
import Head from "next/head";

const Home = ({ slug }) => (
  <div className="container">
    <Head>
      <title>Blog List</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📜</text></svg>"
      />
    </Head>

    <main>
      <h1 className="title">
        Listing{" "}
        <a href="https://github.com/steffin-codes/devlog/tree/master/posts">
          .md
        </a>{" "}
        files
      </h1>

      <p className="description">
        A <strong>Next.js</strong> powered blog with headless CMS hosted on
        github pages written using markdown :)
      </p>

      <div className="grid">
        {slug.map((slug) => {
          return (
            <Link href={"/blog/" + slug} key={slug}>
              <a className="card">
                <h3>{titleCase(slug.split("-").slice(1).join(" "))}</h3>
                <p>📅 {convertToDate(slug.split("-")[0])}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </main>

    <footer>Made with 🦄</footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      ::selection {
        background: var(--accent-color);
        color: var(--bg-color);
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: var(--accent-color);
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid var(--bg-color);
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: var(--accent-color);
        border-color: var(--accent-color);
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      .logo {
        height: 1em;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;1,300;1,400&display=swap");
      :root {
        --bg-color: #eaeaea;
        --font-color: black;
        --accent-color: #7a490b;
      }
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Raleway, Roboto, Helvetica Neue, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slug: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function convertToDate(str) {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = str.slice(0, 4);
  var month = MONTHS[Number(str.slice(4, 6)) - 1];
  var date = str.slice(6,8);
  return month + " " + date + ", " + year;
}

export default Home;
