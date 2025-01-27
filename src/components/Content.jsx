import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Content({ fileName }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/markdown/${fileName}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [fileName]);

  return (
    <div className="markdown-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Content;
