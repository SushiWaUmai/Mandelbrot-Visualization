import Document, { Html, Head, Main, NextScript } from "next/document";
import { prefix } from "../utils/prefix";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href={`${prefix}/manifest.json`} />
          <link rel="apple-touch-icon" href={`${prefix}/icons/apple-icon-180.png`}></link>
          <meta name="theme-color" content="#fc2403" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;