#version 300 es
 
uniform vec2 _screenSize;
out vec2 screenSize;
uniform float _zoom;
out float zoom;
uniform float _iterations;
out float iterations;
in vec4 pos;
 
void main() {
  gl_Position = pos;
  screenSize = _screenSize;
  zoom = _zoom;
  iterations = _iterations;
}

