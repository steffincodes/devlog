import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import {
  duotoneDark,
  duotoneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
const CodeBlock = ({ language, value }) => {
  return language ? (
    <SyntaxHighlighter
      language={language}
      style={duotoneDark}
      customStyle={{
        borderRadius: "10px", // style for <pre>
      }}
      showLineNumbers={true}
    >
      {value}
    </SyntaxHighlighter>
  ) : (
    // if no language is specified
    <SyntaxHighlighter
      language={language}
      style={duotoneLight}
      customStyle={{
        borderRadius: "10px", // style for <pre>
      }}
      showLineNumbers={false}
    >
      {value}
    </SyntaxHighlighter>
  );
};
export default function Markdown({ postBody }) {
  return (
    <ReactMarkdown
      source={postBody}
      escapeHtml={false}
      renderers={{
        code: CodeBlock,
      }}
    />
  );
}

// to call use the following
// <Markdown postBody={htmlString} />
// where
// htmlString = matter(
//   (markdownWithMetadata = fs.readFileSync(filePath).toString())
//   .content
// );
