import { useEffect, useState } from "react";

import "./App.css";
import File from "./components/File";
function App() {
  const [path, setPath] = useState<string>("C:/");
  const [files, setFiles] = useState<any[]>(["waw"]);
  const [children, setChildren] = useState(false);

  const getFiles = async () => {
    const files = await window.eel.getFiles(path, children)();

    setFiles(files);
  };

  useEffect(() => {
    getFiles();
  }, [window.eel, children, path]);

  const submitForm = (e: any) => {
    e.preventDefault();
    getFiles();
  };
  const removeDir = () => {
    setPath((prev) =>
      prev.replaceAll("/", "\\").substring(0, prev.lastIndexOf(`\\`)),
    );
  };

  return (
    <>
      <section>
        <div className="top-bar">
          <div className="buttons">
            <button onClick={removeDir}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.99 7.5 8.24 3.75m0 0L4.49 7.5m3.75-3.75v16.499h11.25"
                />
              </svg>
            </button>
            <button onClick={() => setChildren(!children)}>
              {children ? "Dont scan children" : "Scan children"}
            </button>
          </div>
          <form onSubmit={(e) => submitForm(e)}>
            <input
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
            />
          </form>
        </div>
        {files?.map((file) => (
          <File key={file} file={file} setPath={setPath} />
        ))}
      </section>
    </>
  );
}

export default App;
