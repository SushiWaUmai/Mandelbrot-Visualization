import { FunctionComponent } from "react";
import Head from "next/head";

interface LayoutComponentProps {}

const LayoutComponent: FunctionComponent<LayoutComponentProps> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta lang="en" />
        <meta charSet="UTF-8" />
        <meta property="og:site_name" content="Mandelbrot set visualization" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#fc2403" />
        <meta name="author" content="Eugene Matsumura" />
        <meta name="publisher" content="Eugene Matsumura" />
        <meta name="copyright" content="Eugene Matsumura" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <div className="absolute w-full h-full">{children}</div>
    </>
  );
};

export default LayoutComponent;
