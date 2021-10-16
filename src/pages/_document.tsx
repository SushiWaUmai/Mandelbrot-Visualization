import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />
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
