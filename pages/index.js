import Head from "next/head";
import { BLOG_NAME, BLOG_DESC } from "../lib/constants";
import Meta from "../components/Meta";
export default function Home() {
  return (
    <div className="container">
      <Meta title={BLOG_NAME} desc={BLOG_DESC} favicon='🍶' />
      <main>
        <h1 className="title">
          Welcome to <a href="/blog">{BLOG_NAME}!</a>
        </h1>

        <p className="description">
          A <strong>Next.js</strong> powered blog hosted on
          <a href="https://github.com/steffin-codes/devlog"> github </a>
          deployed on
          <a href="https://steffin-devlog.netlify.app/"> netifly </a>
          pages written using markdown :)
        </p>

        {/* <div className="grid">
          <a href="#" className="card">
            <h3>Category 1 &rarr;</h3>
            <p>Tiny description on why this needs its own category.</p>
          </a>
        </div> */}
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

        .title a,
        p a {
          color: var(--accent-color);
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active,
        p a:hover,
        p a:focus,
        p a:active {
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
}
