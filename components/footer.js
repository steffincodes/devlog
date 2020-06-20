import DateFormater from "./date-formater";
import { AUTHOR } from "../lib/constants";
export default function Footer({ fileCreatedDate, fileLastmodifiedDate }) {
  return (
    <footer>
      <p>
        ⚗️ Conjured by {AUTHOR} | on{" "}
        <code>
          <DateFormater dateString={fileCreatedDate} />{" "}
        </code>
        | last modified on{" "}
        <code>
          <DateFormater dateString={fileLastmodifiedDate} />
        </code>
      </p>
      <style jsx global>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid var(--bg-color);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </footer>
  );
}
