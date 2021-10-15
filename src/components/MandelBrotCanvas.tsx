import React, { useRef, FunctionComponent, useState, useEffect } from "react";
import Shader from "../utils/shader";
import { loadFile } from "../utils/webglutils";

interface MandelBrotCanvasProps {}

const MandelBrotCanvas: FunctionComponent<MandelBrotCanvasProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shader, setShader] = useState<Shader>();

  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
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

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    };

    window.addEventListener("resize", updateCanvasSize);

    updateCanvasSize();
    handleStart();
  }, []);

  const handleUpdate = () => {
    shader?.quad();
  };

  return (
    <main>
      <canvas className="fixed top-0 left-0" ref={canvasRef} />
      <button onClick={handleUpdate}>Update</button>
    </main>
  );
};

export default MandelBrotCanvas;
