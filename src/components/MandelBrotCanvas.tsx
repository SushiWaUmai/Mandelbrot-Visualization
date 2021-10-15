import React, { useRef, FunctionComponent, useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Shader from "../utils/shader";
import { loadFile } from "../utils/webglutils";
import NavbarComponent from "./NavbarComponent";

interface MandelBrotCanvasProps {}

const MandelBrotCanvas: FunctionComponent<MandelBrotCanvasProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [GL, setGL] = useState<WebGL2RenderingContext>();
  const [shader, setShader] = useState<Shader>();
  const [zoom, setZoom] = useState(0.1);
  const [iterations, setIterations] = useState(80);
  // const [center, setCenter] = useState([0, 0]);
  const size = useWindowSize();

  const handleUpdate = () => {
    shader?.quad();
  };

  const updateCanvasSize = () => {
    if (canvasRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      GL?.viewport(0, 0, width, height);
      shader?.setVec2("_screenSize", [width, height]);
    }
  };

  useEffect(() => {
    const handleZoom = (e: WheelEvent) => {
      setZoom((prev) => Math.max(prev + e.deltaY * 0.001, 0.01));
    };

    const handleStart = async () => {
      if (canvasRef.current) {
        var gl = canvasRef.current.getContext("webgl2");
        if (!gl) {
          console.log("No WebGL2 avaiable");
          return;
        }

        var vertSrc = await loadFile("shaders/mandelbrot.vert");
        var fragSrc = await loadFile("shaders/mandelbrot.frag");

        const s = new Shader(gl, vertSrc, fragSrc);
        setShader(s);

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        setGL(gl);

        canvasRef.current.addEventListener("wheel", handleZoom);
      }
    };

    updateCanvasSize();
    handleStart();
    handleUpdate();

    return () => {
      canvasRef.current?.removeEventListener("wheel", handleZoom);
    };
  }, []);

  useEffect(() => {
    shader?.setFloat("_zoom", zoom);
    console.log("handle zoom", zoom);
    handleUpdate();
  }, [zoom, shader]);

  useEffect(() => {
    shader?.setFloat("_iterations", iterations);
    handleUpdate();
  }, [iterations, shader]);

  useEffect(() => {
    updateCanvasSize();
    handleUpdate();
  }, [shader, size]);

  return (
    <main>
      <canvas
        className="block absolute top-0 left-0 right-0 bottom-0"
        ref={canvasRef}
      />
      <div className="absolute top-0 left-0 right-0 flex flex-col justify-center">
        <NavbarComponent />
      </div>
    </main>
  );
};

export default MandelBrotCanvas;
