import { FunctionComponent } from "react";
import Link from "next/link";
import {} from "@heroicons/react/outline";

interface NavbarComponentProps {}

const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
  return (
    <div className="text-white bg-gray-900 bg-opacity-50 p-3 flex justify-center">
      <div className="container mx-2 lg:mx-auto">
        <div className="flex justify-between">
          <span>
            <Link passHref href="/">
              <div className="btn btn-effect flex align-middle items-center py-1">
                <h1 className="text-xl">Mandelbrot set visualization</h1>
              </div>
            </Link>
          </span>
          <div className="flex gap-x-3">
            <span className="inline-block">
              <Link
                passHref
                href="https://github.com/SushiWaUmai/Mandelbrot-Visualization"
              >
                <div className="btn btn-effect flex align-middle items-center py-1">
                  <h1 className="text-bold">Github</h1>
                </div>
              </Link>
            </span>
            {/* <span className="inline-block">
              <Link passHref href="/about">
                <div className="btn btn-effect flex align-middle items-center py-1">
                  <h1 className="text-bold">About</h1>
                </div>
              </Link>
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
