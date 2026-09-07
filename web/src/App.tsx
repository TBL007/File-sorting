import { useEffect, useState } from "react";

import "./App.css";
import File from "./components/File";
import Search from "./components/Search";
function App() {
  const [path, setPath] = useState<string>("C:\\");
  const [files, setFiles] = useState<Array<File>>([
    {
      name: "$Recycle.Bin",
      path: "C:\\$Recycle.Bin",
      type: "directory",
      size: 0,
      modified: 1756295432.4437635,
      created: 1711956366.70778,
    },
    {
      name: "$WINDOWS.~BT",
      path: "C:\\$WINDOWS.~BT",
      type: "directory",
      size: 0,
      modified: 1762852208.859429,
      created: 1762852208.8571854,
    },
    {
      name: "$Windows.~WS",
      path: "C:\\$Windows.~WS",
      type: "directory",
      size: 0,
      modified: 1762852207.2108984,
      created: 1762852207.2088852,
    },
    {
      name: "adobeTemp",
      path: "C:\\adobeTemp",
      type: "directory",
      size: 0,
      modified: 1788502953.6215436,
      created: 1783879050.1458533,
    },
    {
      name: "appverifUI.dll",
      path: "C:\\appverifUI.dll",
      type: "file",
      extension: ".dll",
      size: 112472,
      modified: 1760535388,
      created: 1760535388,
    },
    {
      name: "Documents and Settings",
      path: "C:\\Documents and Settings",
      type: "directory",
      size: 4096,
      modified: 1755694785.06535,
      created: 1711956076.184435,
    },
    {
      name: "DRIVERS",
      path: "C:\\DRIVERS",
      type: "directory",
      size: 0,
      modified: 1761815908.7315555,
      created: 1761815908.7315555,
    },
    {
      name: "DumpStack.log",
      path: "C:\\DumpStack.log",
      type: "file",
      extension: ".log",
      size: 12288,
      modified: 1769413881.282312,
      created: 1755711107.127498,
    },
    {
      name: "DumpStack.log.tmp",
      path: "C:\\DumpStack.log.tmp",
      type: "file",
      extension: ".tmp",
      size: 12288,
      modified: 1788102789.604148,
      created: 1755711107.127498,
    },
    {
      name: "ESD",
      path: "C:\\ESD",
      type: "directory",
      size: 0,
      modified: 1762854040.4277568,
      created: 1762852494.4359934,
    },
    {
      name: "hiberfil.sys",
      path: "C:\\hiberfil.sys",
      type: "file",
      extension: ".sys",
      size: 6661009408,
      modified: 1788792657.0672278,
      created: 1755711276.4363213,
    },
    {
      name: "inetpub",
      path: "C:\\inetpub",
      type: "directory",
      size: 0,
      modified: 1746839256.2268813,
      created: 1746839256.2268813,
    },
    {
      name: "main.c",
      path: "C:\\main.c",
      type: "file",
      extension: ".c",
      size: 107,
      modified: 1743445502,
      created: 1781526249.0279808,
    },
    {
      name: "msys64",
      path: "C:\\msys64",
      type: "directory",
      size: 8192,
      modified: 1781526768.7080228,
      created: 1781526722.2495196,
    },
    {
      name: "OneDriveTemp",
      path: "C:\\OneDriveTemp",
      type: "directory",
      size: 0,
      modified: 1756199373.8659458,
      created: 1756199373.8649373,
    },
    {
      name: "pagefile.sys",
      path: "C:\\pagefile.sys",
      type: "file",
      extension: ".sys",
      size: 15304101888,
      modified: 1788102789.5981486,
      created: 1755711107.0966544,
    },
    {
      name: "PerfLogs",
      path: "C:\\PerfLogs",
      type: "directory",
      size: 0,
      modified: 1711956366.70778,
      created: 1711956366.70778,
    },
    {
      name: "Program Files",
      path: "C:\\Program Files",
      type: "directory",
      size: 12288,
      modified: 1786962295.1598125,
      created: 1711956366.7234,
    },
    {
      name: "Program Files (x86)",
      path: "C:\\Program Files (x86)",
      type: "directory",
      size: 8192,
      modified: 1787899336.5362153,
      created: 1711956366.832766,
    },
    {
      name: "ProgramData",
      path: "C:\\ProgramData",
      type: "directory",
      size: 12288,
      modified: 1787164463.2240324,
      created: 1711956366.8640206,
    },
    {
      name: "Programfiler",
      path: "C:\\Programfiler",
      type: "directory",
      size: 12288,
      modified: 1786962295.1598125,
      created: 1711956366.7234,
    },
    {
      name: "Recovery",
      path: "C:\\Recovery",
      type: "directory",
      size: 0,
      modified: 1755711228.8235517,
      created: 1711956366.9109018,
    },
    {
      name: "swapfile.sys",
      path: "C:\\swapfile.sys",
      type: "file",
      extension: ".sys",
      size: 16777216,
      modified: 1788102789.604148,
      created: 1755711107.127498,
    },
    {
      name: "System Volume Information",
      path: "C:\\System Volume Information",
      type: "directory",
      size: 12288,
      modified: 1788783570.812665,
      created: 1755711106.8991315,
    },
    {
      name: "TempFiles",
      path: "C:\\TempFiles",
      type: "directory",
      size: 4096,
      modified: 1770637281.4752307,
      created: 1757928707.2734878,
    },
    {
      name: "Users",
      path: "C:\\Users",
      type: "directory",
      size: 4096,
      modified: 1755694785.06535,
      created: 1711956076.184435,
    },
    {
      name: "vfcompat.dll",
      path: "C:\\vfcompat.dll",
      type: "file",
      extension: ".dll",
      size: 68104,
      modified: 1760535400,
      created: 1760535400,
    },
    {
      name: "Windows",
      path: "C:\\Windows",
      type: "directory",
      size: 24576,
      modified: 1788783430.8404706,
      created: 1711956076.184435,
    },
  ]);
  const [filteredFiles, setFilteredFiles] = useState<Array<File>>();
  const [children, setChildren] = useState(false);

  const getFiles = async () => {
    const files = await window.eel.getFiles(children, path)();
    console.log(files);
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
                width={16}
                height={16}
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
          <Search items={files} setFilteredFiles={setFilteredFiles} />
        </div>
        {filteredFiles?.map((file) => (
          <File key={file.path} file={file} setPath={setPath} />
        ))}
      </section>
    </>
  );
}

export default App;
