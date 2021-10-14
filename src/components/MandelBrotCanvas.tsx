import React, { FunctionComponent, useEffect, useState } from "react";
import p5Types from "p5";
import Sketch from "react-p5";

interface MandelBrotCanvasProps {}

const MandelBrotCanvas: FunctionComponent<MandelBrotCanvasProps> = () => {
  let p5Canvas: p5Types.Renderer;
  let mandelBrot: p5Types.Shader;

  const preload = (p5: p5Types) => {
    mandelBrot = p5.loadShader(
      "shaders/mandelbrot.vert",
      "shaders/mandelbrot.frag"
    );
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5Canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
      .parent(canvasParentRef);

    p5Canvas.position(0, 0);
    p5.shader(mandelBrot);
  };

  const draw = (p5: p5Types) => {
    p5.rect(0, 0, p5.width, p5.height);
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      preload={preload}
    />
  );
};

export default MandelBrotCanvas;
