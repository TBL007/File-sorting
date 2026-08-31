interface Eel {
  [key: string]: (...args: any[]) => any;
}

interface Window {
  eel: Eel;
}
