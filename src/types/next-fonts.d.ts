declare module 'next-fonts' {
  interface FontOptions {
    name: string;
    variable: string;
    src: Array<{
      path: string;
      weight: string;
      style: string;
    }>;
  }

  function createFont(options: FontOptions): {
    name: string;
    variable: string;
    src: Array<{
      path: string;
      weight: string;
      style: string;
    }>;
  };
  export { createFont };
}
