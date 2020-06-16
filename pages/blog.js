import Link from "next/link";
import fs from "fs";

const Home = ({ slug }) => (
  <div>
    Lists of posts:
    {slug.map(slug => {
      return (
        <div key={slug}>
          <Link href={"/blog/" + slug}>
            <a>{"/blog/" + slug}</a>
          </Link>
        </div>
      );
    })}
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slug: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Home;