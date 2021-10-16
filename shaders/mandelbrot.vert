#version 300 es
 
uniform vec2 _screenSize;
out vec2 screenSize;
uniform float _scale;
out float scale;
uniform float _iterations;
out float iterations;
uniform vec2 _center;
out vec2 center;
in vec4 pos;
 
void main() {
  gl_Position = pos;
  screenSize = _screenSize;
  scale = _scale;
  iterations = _iterations;
  center = _center;
}

