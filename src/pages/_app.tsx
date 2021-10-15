import type { AppProps } from "next/app";
import LayoutComponent from "../components/LayoutComponent";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
export default MyApp;
