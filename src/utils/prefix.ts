export const __prod__ = process.env.NODE_ENV === "production";
export const prefix = __prod__ ? "Mandelbrot-Visualization/" : "";