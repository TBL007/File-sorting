interface FileProps {
  file: File;
  setPath: Function;
}
export default function File(props: FileProps) {
  return (
    <button
      className="file"
      onClick={() =>
        props.file.type === "directory"
          ? props.setPath(props.file.path)
          : window.eel.openFile(props.file.path)
      }
    >
      {props.file.type === "directory" ? (
        <svg
          width={24}
          height={24}
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
            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
      ) : (
        <svg
          width={24}
          height={24}
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
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      )}
      <span>{props.file.name}</span>
      {props.file.created && (
        <span>
          Created:
          {new Date(props.file.created * 1000).toLocaleDateString()}
        </span>
      )}
      {props.file.modified && (
        <span>
          Modified:
          {new Date(props.file.modified * 1000).toLocaleDateString()}
        </span>
      )}
      {props.file.size !== undefined && (
        <span>
          {props.file.size >= 1000
            ? props.file.size >= 1000000
              ? (props.file.size / 1000000).toFixed(2)
              : (props.file.size / 1000).toFixed(2)
            : props.file.size?.toFixed(2)}
          {props.file.size >= 1000
            ? props.file.size >= 1000000
              ? "MB"
              : "KB"
            : "B"}
        </span>
      )}
    </button>
  );
}
