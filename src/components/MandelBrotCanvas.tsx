import React, { useRef, FunctionComponent, useState, useEffect } from "react";
import Shader from "../utils/shader";
import { loadFile } from "../utils/webglutils";
import NavbarComponent from "./NavbarComponent";

interface MandelBrotCanvasProps {}

const MandelBrotCanvas: FunctionComponent<MandelBrotCanvasProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [GL, setGL] = useState<WebGL2RenderingContext>(null);
  const [shader, setShader] = useState<Shader>();

  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        if (GL) {
          GL.viewport(0, 0, GL.canvas.width, GL.canvas.height);
        }
      }
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
      }
    };

    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("resize", handleUpdate);

    updateCanvasSize();
    handleStart();
    handleUpdate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("resize", handleUpdate);
    };
  }, []);

  const handleUpdate = () => {
    console.log("Update Canvas");
    shader?.quad();
  };

  useEffect(() => {
    handleUpdate();
  }, [shader]);

  const handleButtonClick = () => {
    console.log("Button Click");
  };

  return (
    <main>
      <canvas
        className="block absolute top-0 left-0 right-0 bottom-0"
        ref={canvasRef}
      />
      <div className="absolute top-0 left-0 right-0 flex flex-col justify-center">
        <NavbarComponent />
        <div className="container text-center"></div>
      </div>
    </main>
  );
};

export default MandelBrotCanvas;
