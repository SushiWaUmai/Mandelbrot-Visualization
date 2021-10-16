import React, { useRef, FunctionComponent, useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Shader from "../utils/shader";
import { createTexture, loadFile } from "../utils/webglutils";
import NavbarComponent from "./NavbarComponent";
import Head from "next/head";

interface MandelBrotCanvasProps {}

const MandelBrotCanvas: FunctionComponent<MandelBrotCanvasProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [GL, setGL] = useState<WebGL2RenderingContext>();
  const [shader, setShader] = useState<Shader>();
  const [scale, setScale] = useState(1);
  const [iterations, setIterations] = useState(80);
  const [mouseDown, setMouseDown] = useState(false);
  const [center, setCenter] = useState([0, 0]);
  const size = useWindowSize();

  const handleReset = () => {
    setCenter([0, 0]);
    setMouseDown(false);
    setScale(1);
    setIterations(80);
  };

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
    const handleStart = async () => {
      if (canvasRef.current) {
        var gl = canvasRef.current.getContext("webgl2", {
          preserveDrawingBuffer: true,
        });
        if (!gl) {
          console.log("No WebGL2 avaiable");
          return;
        }
        const gradient = await createTexture(gl, "gradient.png");
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, gradient);

        var vertSrc = await loadFile("shaders/mandelbrot.vert");
        var fragSrc = await loadFile("shaders/mandelbrot.frag");

        const s = new Shader(gl, vertSrc, fragSrc);
        s.setInt("_tex", 0);
        setShader(s);

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        setGL(gl);
      }
    };

    updateCanvasSize();
    handleStart();
    handleUpdate();
  }, []);

  useEffect(() => {
    const handleZoom = (e: WheelEvent) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const cvtY = (y: number) => {
        return (y / height - 0.5) * 2.0;
      };

      const cvtX = (x: number) => {
        let xOffset = (width - height) / height;
        return (x / height - 0.5) * 2.0 - xOffset;
      };

      const wheel = e.deltaY > 0 ? 1 : -1;
      const zoom = Math.exp(wheel * 0.2);
      const scaleChange = scale * zoom - scale;
      const x = center[0] - cvtX(e.pageX) * scaleChange;
      const y = center[1] + cvtY(e.pageY) * scaleChange;

      setScale(scale * zoom);
      setCenter([x, y]);
    };

    canvasRef.current?.addEventListener("wheel", handleZoom);

    return () => {
      canvasRef.current?.removeEventListener("wheel", handleZoom);
    };
  }, [canvasRef, scale, center]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const handleMouseDown = () => {
      setMouseDown(true);
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseDown) {
        setCenter((prev) => [
          prev[0] - (e.movementX / height) * scale,
          prev[1] + (e.movementY / height) * scale,
        ]);
      }
    };
    const handleMouseUp = () => {
      setMouseDown(false);
    };
    canvasRef.current?.addEventListener("mousedown", handleMouseDown);
    canvasRef.current?.addEventListener("mousemove", handleMouseMove);
    canvasRef.current?.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvasRef.current?.removeEventListener("mousedown", handleMouseDown);
      canvasRef.current?.removeEventListener("mousemove", handleMouseMove);
      canvasRef.current?.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseDown, center, scale]);

  useEffect(() => {
    shader?.setFloat("_scale", scale);
    shader?.setVec2("_center", center);
    handleUpdate();
  }, [center, shader]);

  useEffect(() => {
    shader?.setFloat("_iterations", iterations);
    handleUpdate();
  }, [iterations, shader]);

  useEffect(() => {
    updateCanvasSize();
    handleUpdate();
  }, [shader, size]);

  const handleDownload = function () {
    if (canvasRef.current) {
      var link = document.createElement("a");
      link.download = "Mandelbrot.png";
      link.href = canvasRef.current.toDataURL("img/png");
      link.click();
    }
  };

  return (
    <main>
      <canvas
        className="block absolute top-0 left-0 right-0 bottom-0"
        ref={canvasRef}
      />
      <div className="absolute top-0 left-0 right-0">
        <NavbarComponent />
        <div className="bg-gray-800 bg-opacity-50 flex justify-center">
          <div className="flex justify-between container">
            <div className="flex align-middle items-center mx-3 gap-x-3">
              <label htmlFor={"Iterations"} className="text-white">
                Iterations
              </label>
              <input
                type="range"
                min={1}
                max={500}
                value={iterations}
                onChange={(e) => setIterations(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-row-reverse mx-3 gap-x-3">
              <div className="bg-blue-400 rounded px-3 py-2 my-2">
                <button onClick={handleDownload}>
                  <p className="text-bold">Download</p>
                </button>
              </div>
              <div className="bg-green-400 rounded px-3 py-2 my-2">
                <button onClick={handleReset}>
                  <p className="text-bold">Reset</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MandelBrotCanvas;
