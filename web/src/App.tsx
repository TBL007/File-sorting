import { useEffect, useState } from "react";

import "./App.css";
import File from "./components/File";
import Search from "./components/Search";
function App() {
  const [path, setPath] = useState<string>("C:\\");
  const [files, setFiles] = useState<Array<File>>();
  const [filteredFiles, setFilteredFiles] = useState<Array<File>>();
  const [children, setChildren] = useState(false);

  const getFiles = async () => {
    const files = await window.eel.getFiles(children, path)();
    // console.log(files);
    setFiles(files);
  };

  useEffect(() => {
    getFiles();
  }, [window.eel, children, path]);

  useEffect(() => {
    alert("ha children disabled hvis du er i store mapper");
  }, []);

  const submitForm = (e: any) => {
    e.preventDefault();
    getFiles();
  };

  const removeDir = () => {
    setPath((prev) => {
      const result = prev
        .replaceAll("/", "\\")
        .substring(0, prev.lastIndexOf(`\\`));
      return result.includes("C:\\") ? result : "C:\\";
    });
  };

  return (
    <>
      <section className="main">
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
                width={24}
                height={24}
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
          <div className="inputs">
            <form onSubmit={(e) => submitForm(e)}>
              <input
                type="text"
                value={path}
                onChange={(e) => setPath(e.target.value)}
              />
            </form>
            <Search items={files} setFilteredFiles={setFilteredFiles} />
          </div>
        </div>
        {filteredFiles?.map((file) => (
          <File key={file.path} file={file} setPath={setPath} />
        ))}
      </section>
    </>
  );
}

export default App;
