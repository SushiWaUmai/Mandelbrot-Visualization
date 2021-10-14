import type { NextPage } from "next";
import dynamic from 'next/dynamic'
const MandelBrotCanvas  = dynamic( () => import('../components/MandelBrotCanvas'), { ssr: false } )


const Home: NextPage = () => {
  return <MandelBrotCanvas />;
};

export default Home;
