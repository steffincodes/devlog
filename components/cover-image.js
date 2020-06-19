import Link from "next/link";

export default function CoverImage({ title, slug }) {
  const image = (
    <div
      style={{
        position: "relative",
        textAlign: "center",
      }}
    >
      <img
        src="\assets\img\trans.png"
        alt={`Cover Image for ${title}`}
        style={{
          backgroundColor: `${GenerateColor()}`,
          width: "100%",
          display: "block",
          height: "25vw",
          margin: "0 auto",
          paddingTop: "1em",
          userSelect: "none",
          borderRadius: "5px",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "7vw",
          userSelect: "none",
        }}
      >
        {title}
      </div>
    </div>
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

function GenerateColor() {
  return `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
}
