export const loadFile = async (path: string) => {
  const res = await fetch(path);
  const data = res.text();
  return data;
};

export const createShader = (
  gl: WebGL2RenderingContext,
  type: number,
  source: string
) => {
  const shader = gl.createShader(type);
  if (shader) {
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
      return shader;
    }

    console.log(`[SHADER ERROR] ${gl.getShaderInfoLog(shader)}`);
  }

  gl.deleteShader(shader);
  throw "Could not create shader";
};

export const createProgram = (
  gl: WebGL2RenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader
) => {
  var program = gl.createProgram();
  if (program) {
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
      return program;
    }

    console.log(gl.getProgramInfoLog(program));
  }

  gl.deleteProgram(program);
  throw "Could not create Program";
};

export const createTexture = (
  gl: WebGL2RenderingContext,
  path: string
): Promise<WebGLTexture> => {
  return new Promise((resolve, reject) => {
    const tex = gl.createTexture();
    if (tex) {
      const img = new Image();
      img.onload = function () {
        resolve(handleTextureLoaded(gl, tex, img));
      };
      img.src = path;
    }
  });
};

const handleTextureLoaded = (
  gl: WebGL2RenderingContext,
  tex: WebGLTexture,
  img: HTMLImageElement
) => {
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.bindTexture(gl.TEXTURE_2D, null);

  return tex;
};
