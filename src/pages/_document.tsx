import Document, { Html, Head, Main, NextScript } from "next/document";
import manifest from "../../public/manifest.json";
import { prefix } from "../utils/prefix";

class MyDocument extends Document {
  componentDidMount() {
    const manifestElement = document.getElementById("manifest");
    const manifestString = JSON.stringify({
      ...manifest,
      icons: [
        {
          src: `${prefix}icons/manifest-icon-192.maskable.png`,
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: `${prefix}icons/manifest-icon-512.maskable.png`,
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable any",
        },
      ],
      start_url: prefix,
    });
    manifestElement?.setAttribute(
      "href",
      "data:application/json;charset=utf-8," +
        encodeURIComponent(manifestString)
    );
  }
  
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="manifest.json" id="manifest" />
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
