import { createShader, createProgram } from "./webglutils";

export default class Shader {
  gl: WebGL2RenderingContext;

  constructor(gl: WebGL2RenderingContext, vs: string, fs: string) {
    this.gl = gl;

    const indecies = new Uint8Array([0, 1, 2, 2, 1, 3]);
    const vertices = new Float32Array([-1, -1, +1, -1, -1, +1, +1, +1]);

    const vert = createShader(this.gl, gl.VERTEX_SHADER, vs);
    const frag = createShader(this.gl, gl.FRAGMENT_SHADER, fs);

    if (!vert || !frag) {
      console.log("Could not create shader");
      return;
    }

    const prog = createProgram(this.gl, vert, frag);

    if (!prog) {
      console.log("Could not create program");
      return;
    }

    gl.useProgram(prog);

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const ebo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indecies, gl.STATIC_DRAW);

    var posLoc = gl.getAttribLocation(prog, "pos");
    var vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
  }

  quad() {
    const gl = this.gl;
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0);
  }
}
