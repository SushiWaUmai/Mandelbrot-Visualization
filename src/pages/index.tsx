import type { NextPage } from "next";
import MandelBrotCanvas from "../components/MandelBrotCanvas";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mandelbrot set visualization</title>
        <meta property="og:title" content="Mandelbrot set visualization" />
        <meta
          name="description"
          property="og:description"
          content="See the mandelbrot set in real time!"
        />
        <meta name="keywords" content="mandelbrot visualization interactive realtime webgl" />
        <meta property="og:image" itemProp="image" content="screenshot.png" />
      </Head>
      <MandelBrotCanvas />
    </>
  );
};

export default Home;
