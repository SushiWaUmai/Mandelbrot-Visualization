#version 300 es
 
uniform vec2 _screenSize;
out vec2 screenSize;
in vec4 pos;
 
void main() {
  gl_Position = pos;
  screenSize = _screenSize;
}

