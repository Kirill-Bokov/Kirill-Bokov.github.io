import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Content({ fileName }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}markdown/${fileName}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [fileName]);

  return (
    <div className={` ${fileName.replace(".md", "")} `}>
      <div className="markdown-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Content;
