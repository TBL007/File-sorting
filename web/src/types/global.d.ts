interface Eel {
  [key: string]: (...args: any[]) => any;
}

interface Window {
  eel: Eel;
}

interface File {
  name: string;
  path: string;
  type: "directory" | "file";
  created?: number;
  extension?: string;
  modified?: number;
  size?: number;
}
