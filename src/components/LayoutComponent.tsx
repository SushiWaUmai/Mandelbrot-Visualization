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
      </Head>
      <div className="absolute w-full h-full">{children}</div>
    </>
  );
};

export default LayoutComponent;