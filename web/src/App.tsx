import { useEffect, useState } from "react";

import "./App.css";
function App() {
  const [path, setPath] = useState<string>("C:");
  const [files, setFiles] = useState<any[]>(["waw"]);

  const getFiles = async () => {
    const files = await eel.getFiles(path)();

    setFiles(files);
  };

  useEffect(() => {
    getFiles();
  }, [eel]);

  const submitForm = (e: any) => {
    e.preventDefault();
    getFiles();
  };

  return (
    <>
      <section>
        <form onSubmit={(e) => submitForm(e)}>
          <input
            type="text"
            value={path}
            onChange={(e) => setPath(e.target.value)}
          />
        </form>
        {files?.map((file) => (
          <div key={file}></div>
        ))}
      </section>
    </>
  );
}

export default App;
